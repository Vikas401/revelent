import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

 class EventForm extends Component {
   state = {
     title: '',
     date: '',
     city: '',
     venue:'',
     hostedBy: '',
     description:''
   }

   componentDidMount(){
     if(this.props.selectedEvent !== null){
       this.setState({
         ...this.props.selectedEvent
       })
     }
   }

   handleSubmit = (evt) => {
     evt.preventDefault();
     if (this.state.id){
       this.props.updateEvent(this.state);
     }else{
      this.props.createEvent(this.state);
    }
   }

   handleChange=(evt) => {
     this.setState({
       [evt.target.name]: evt.target.value
     })
   }
  render() {
     const { title, date, city, venue, hostedBy, description } = this.state;
     const { cancelFormOpen } = this.props;
    return (
      <Segment>
     
              <Form onSubmit={this.handleSubmit} autoComplete='off'>
                <Form.Field>
                  <label>Event Title</label>
                  <input name='title'
                  value={title}
                  onChange={this.handleChange}
                  placeholder="Event Title" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input 
                  name='date'
                  type="date"
                  value={date}
                  onChange={this.handleChange}
                  placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input 
                  name='city'
                  value={city}
                  onChange={this.handleChange}
                  placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input 
                  name='venue'
                  value={venue}
                  onChange={this.handleChange}
                  placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input 
                  name='hostedBy'
                  value={hostedBy}
                  onChange={this.handleChange}
                  placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Form.Field>
                  <label>Discription</label>
                  <input 
                  name='description'
                  value={description}
                  onChange={this.handleChange}
                  placeholder="Enter the name of person hosting" />
                </Form.Field>
                
                <Button positive type="submit">
                  Submit
                </Button>
                <Button onClick={cancelFormOpen} type="button">Cancel</Button>
              </Form>
            </Segment>
    )
  }
}
export default EventForm;