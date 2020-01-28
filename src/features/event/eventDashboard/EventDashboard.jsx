import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import { createEvent, updateEvent, deleteEvent } from '../eventActions';
import LodingComponent from '../../../app/layout/LodingComponent';
import EventActivity from '../EventActivity/EventActivity';

 class EventDashboard extends Component {
     
  handleDeleteEvent = (id) => {
        this.props.deleteEvent(id);
    }
   
  render() {
       const { events, loading } = this.props;
       if (loading) return <LodingComponent />
      return (
        <Grid>
        <Grid.Column width={10}>
        <EventList events={events} 
       
        deleteEvent={this.handleDeleteEvent}
        />
        </Grid.Column>
        <Grid.Column width={6}>
           <EventActivity/>
        </Grid.Column>
         </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  events: state.events,
  loading: state.async.loading
})
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}
export default connect(mapStateToProps, actions)(EventDashboard);