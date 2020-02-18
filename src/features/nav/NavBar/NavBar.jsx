import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignOutMenus from '../Menus/SignOutMenus';
import SignInMenus from '../Menus/SignInMenus';
import { openModal } from '../../modals/modalActions';
import { logOut } from '../../auth/authActions';
//import { loadAuthor } from '../../../author/authorActions';


const actions = {
  openModal,
   logOut,
   
   
   
  
};


 class NavBar extends Component {
  // componentDidMount(){
  //   this.props.sessionStart()
  // }
   handleSignIn = () => {
     this.props.openModal('LoginModal')
     }

   handleRegister = () => {
     this.props.openModal('RegisterModal')
   }

   handleSignOut = () => {
     localStorage.removeItem('token')
     this.props.logOut()
     this.props.history.push('/');
    }
   

   
    render() {
        
         const { auth, author } = this.props;
         console.log(author);
         const authenticated = auth.authenticated;
         
        


         
         
         return (
            
            <Menu inverted fixed="top">
            
            <Container>
              <Menu.Item as={NavLink} exact to='/' header>
                <img src="/assets/logo.png" alt="logo" />
                Re-vents
              </Menu.Item>
              <Menu.Item as={NavLink} exact to='/events' name="Events" />
              { authenticated  ? (
               <Fragment>
               <Menu.Item as={NavLink} to='/people' name="People" />
               <Menu.Item as={NavLink} to='/test' name="Test" />
                
               <Menu.Item>
                 <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
               </Menu.Item>
               </Fragment>
               ) : (
                 null
               )
              }
              
              {  authenticated  ? (
                  
                 <SignInMenus signOut={this.handleSignOut} auth={auth.currentUser} /> 
            ) : (
                  <SignOutMenus signIn={this.handleSignIn} register = {this.handleRegister}/>
                )
              }
            </Container>
          </Menu>
        )
    }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
 
})

export default withRouter(connect(mapStateToProps, actions)(NavBar));