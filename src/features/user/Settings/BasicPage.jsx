import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';

import TextInput from "../../../app/common/form/TextInput";
import RedioInput from '../../../app/common/form/RedioInput';
import DateInput from '../../../app/common/form/DateInput';


class BasicPage extends Component {

    render() {
        const {pristine, submitting} = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='Basics' />
                <Form>
                    <Field
                        width={8}
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Form.Group inline>
                    <label>Gender: </label>
                    <Field
                      name='gender'
                      type='radio'
                      value='male'
                      lable='Male'
                      component={RedioInput}
                    />
                    <Field
                      name='gender'
                      type='radio'
                      value='female'
                      lable='Femail'
                      component={RedioInput}
                    />
                    </Form.Group>
                    <Field
                        width={8}
                        name='dateOfBirth'
                        component={DateInput}
                        placeholder='Date of Birth'
                    />
                    <Field
                        name='city'
                        placeholder='Home Town'
                        component={TextInput}
                        width={8}
                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                </Form>
            </Segment>
        );
    }
}

export default reduxForm({form: 'userProfile'})(BasicPage);