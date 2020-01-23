import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

 class EventForm extends Component {
     state = {
         title: '',
         date: '',
         city: '',
         venue: '',
         hostedBy: ''
     }

     handleSubmit =(evt) => {
        evt.preventDefault();
       this.props.createEvent(this.state)
    }
     handleChange = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value

    })
    }

    render() {
        const { cancleFormOpen } = this.props;
        const { title, date, city, venue, hostedBy } = this.state;
        return (
           <Segment>
              <Form onSubmit={this.handleSubmit} autoComplete='off'>
                <Form.Field>
                  <label>Event Title</label>
                  <input
                   name="title"
                   onChange={this.handleChange} 
                   value={title}
                   placeholder="Event Title" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input 
                  type="date" 
                  name="date"
                  onChange={this.handleChange}
                  value={date}
                  placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input 
                  name="city"
                  onChange={this.handleChange}
                  value={city}
                  placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input 
                  name="venue"
                  onChange={this.handleChange}
                  value={venue}
                  placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input 
                  name="hostedBy"
                  onChange={this.handleChange}
                  value={hostedBy}
                  placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button onClick={cancleFormOpen} type="button">Cancel</Button>
              </Form>
            </Segment>
        )
    }
}
export default EventForm;