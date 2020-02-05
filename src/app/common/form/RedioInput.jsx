import React from 'react'
import { Form, Label } from 'semantic-ui-react';

 const RedioInput = ({ input, width, type, lable }) => {
    return (
        <Form.Field>
          <div className='ui radio'>
           <input {...input} type={type}/>{''}
           <Label>{lable}</Label>
          </div>
        </Form.Field>
    );
};
export default RedioInput;
