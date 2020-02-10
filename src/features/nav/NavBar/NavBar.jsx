import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignOutMenus from '../Menus/SignOutMenus';
import SignInMenus from '../Menus/SignInMenus';
import { openModal } from '../../modals/modalActions';
import { logOut } from '../../auth/authActions';


const actions = {
  openModal,
   logOut,
  
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  
})

 class NavBar extends Component {
    

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
        
         const { auth } = this.props;
         
          
           const authenticated = auth.authenticated;
         
        return (
            
            <Menu inverted fixed="top">
            
            <Container>
              <Menu.Item as={NavLink} exact to='/' header>
                <img src="/assets/logo.png" alt="logo" />
                Re-vents
              </Menu.Item>
              <Menu.Item as={NavLink} exact to='/events' name="Events" />
              {authenticated && auth.currentUser  ? (
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
              
              {authenticated && auth.currentUser  ? (
                  
                 <SignInMenus signOut={this.handleSignOut} user={auth.currentUser} /> 
            ) : (
                  <SignOutMenus signIn={this.handleSignIn} register = {this.handleRegister}/>
                )
              }
            </Container>
          </Menu>
        )
    }
}
export default withRouter(connect(mapStateToProps, actions)(NavBar));
