import React from 'react';
import { Form, Segment, Button, Divider } from 'semantic-ui-react';

import { connect } from 'react-redux';
import SocialLogin from '../SocialLogin/SocialLogin';
import { userPostFetch } from '../authActions';
import { closeModal } from '../../modals/modalActions';
 

 const actions ={
  userPostFetch,
  closeModal,
  
 };


class LoginForm extends React.Component{
  state={
    email: '',
    password: ''
  }

 
  handleSubmit =  (evt) => {
    evt.preventDefault();
    this.props.userPostFetch(this.state)

    this.props.closeModal()
    
   
  
  }
  handleChange= (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  
  render(){
    
    return ( 
      <Form error size="large" onSubmit={this.handleSubmit} autoComplete='on'>
        <Segment>
        <Form.Field>
        <input
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          placeholder="Email"/>
          </Form.Field>
          <Form.Field>
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Password"/>
            </Form.Field>
          <Button fluid size="large" color="teal">
            Login
          </Button>
          <Divider horizontal>
            Or
          </Divider>
          <SocialLogin/>
        </Segment>
      </Form>
    );
  }
} 
 
const mapStateToProps = (state) => {
  return{
    currentUser: state.auth,
    
   }
};


export default connect(mapStateToProps, actions)(LoginForm);