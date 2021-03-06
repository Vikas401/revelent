import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';
import  TextInput  from '../../../app/common/form/TextInput';
import  SelectInput  from '../../../app/common/form/SelectInput';
import  TextArea  from '../../../app/common/form/TextArea';
import DateInput from '../../../app/common/form/DateInput';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
 
  let event ={};

   let events = Object.values(state.event);
   if (eventId && events.length > 0){
     event = events.filter(event => event.id === eventId)[0];
   }
   return{
    initialValues: event
   }
};

const actions = {
    createEvent,
    updateEvent
};

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'The category is required'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description need at least 5 charactors'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];
 class EventForm extends Component {
     
   onFormSubmit = (event) => {
         //console.log(event)
       if (this.props.initialValues.id){
         this.props.updateEvent(this.props.initialValues.id, event);
         this.props.history.push(`/events/${this.props.initialValues.id}`)
       }else{
        const newEvent = {
         ...event,
         id: cuid(),
          hostPhotoURL: '/assets/vikas.jpg',
          photoURL: '/assets/vikas.jpg',
        }
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`)
    
   }
  }

   
  render() {
    const {history, initialValues, invalid, submitting, pristine} = this.props;
   
    return (
      <Grid>
      <Grid.Column width={10}>
      <Segment>
        <Header sub color="teal" content="Event Details"/>
      <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete='off'>
         <Field name="title" 
         type="text"
         component={TextInput} 
         placeholder="Give your event a name"
         /> 
         <Field name="category" 
         type="text"
         component={SelectInput} 
         options={category}
        // multiple={true}
         placeholder="what is your event about"
         /> 
         <Field name="description" 
         type="text"
         component={TextArea}
         rows={3} 
         placeholder="Tell us about your event"
         />
         <Field name="hostedBy" 
         type="text"
         component={TextInput}
         
         placeholder="Hosted By"
         />
         
         <Header sub color="teal" content="Event Location Details"/>
         <Field name="city" component={TextInput} placeholder="Event City"/> 
         <Field name="venue" component={TextInput} placeholder="Event Venue"/> 
         <Field name="date" 
         component={DateInput} 
        
         placeholder="Event Date"/> 
        <Button disabled={invalid || submitting || pristine} positive type="submit">
          Submit
        </Button>
        <Button onClick={ initialValues.id ? () => history.push(`/events/${initialValues.id}`)
        : () => history.push('/events')} type="button">Cancel</Button>
      </Form>
    </Segment>
      </Grid.Column>
      </Grid>
     
    )
  }
}
export default connect(
  mapStateToProps, 
  actions
  )(reduxForm({form: 'eventForm', validate})(EventForm));