import React from 'react';
import { Form, Segment, Button, Divider } from 'semantic-ui-react';
//import { reduxForm } from 'redux-form';
//import TextInput from '../../../app/common/form/TextInput';
import SocialLogin from '../SocialLogin/SocialLogin';
import { connect } from 'react-redux';
import { userPostInsert } from '../authActions';
import { closeModal } from '../../modals/modalActions';
 
class RegisterForm extends React.Component {
    
  state = {
     
      email: '',
      password: '',
      
    }
     
    onFormSubmit = (evt) => {
      evt.preventDefault();
    
      this.props.userPostInsert(this.state);
      this.props.closeModal();
      
    }
    handleChange =(e) =>{
      this.setState({
       [e.target.name]: e.target.value
      });
    };
  
  
 
    render(){
         // console.log(this.props.users);
      return (
        <Segment>
              <Form size="large" onSubmit= {this.onFormSubmit}>
            
              <Form.Field>
                <input
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.email}
                  placeholder="Email"/>
                  </Form.Field>
                  <Form.Field>
                  <input
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    placeholder="Password"/>
                    </Form.Field>
                  
              <Button fluid size="large" color="teal">
                Register
              </Button>
              <Divider horizontal>
              Or
            </Divider>
            <SocialLogin/>
          </Form>
          </Segment>
   );
  };
  }
  const mapStateToProps = (state) => ({
    users: state.auth
  })
  const actions = {
    userPostInsert,
    closeModal
  }


//(reduxForm({ form: 'registerForm'})

export default connect(mapStateToProps, actions)(RegisterForm);