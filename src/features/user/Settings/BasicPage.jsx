import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { getProfileFetch } from '../../auth/authActions';

import TextInput from "../../../app/common/form/TextInput";


const actions = {
    getProfileFetch
};

const mapStateToProps = (state) =>({
    auth: state.auth
})
class BasicPage extends Component {

    handleSubmit=(e) => {
        e.preventDefault();
        this.props.getProfileFetch()
    }
    render() {
        const {pristine, submitting, auth, authenticated } = this.props;
         
        return (
            <Segment>
                <Header dividing size='large' content='Basics' />
                {authenticated &&
                <Form onSubmit={this.handleSubmit}>
                    <Field
                        width={8}
                        name='userName'
                        type='text'
                        component={TextInput}
                        placeholder={auth.currentUser.userName}
                    />
                   
                    <Field
                        width={8}
                        name='email'
                        component={TextInput}
                        placeholder={auth.currentUser.email}
                    />
                    <Field
                        name='userId'
                        placeholder={auth.currentUser.userId}
                        component={TextInput}
                        width={8}

                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                
                    </Form>
                }
                    </Segment>
        );
    }
}

export default connect(mapStateToProps, actions)(reduxForm({form: 'userProfile', enableReinitialize:  true})(BasicPage));