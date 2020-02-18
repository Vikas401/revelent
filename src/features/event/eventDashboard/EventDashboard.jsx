import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import { createEvent, updateEvent, deleteEvent, loadEvent } from '../eventActions';
import LodingComponent from '../../../app/layout/LodingComponent';
import EventActivity from '../EventActivity/EventActivity';

 class EventDashboard extends Component {
   
  render() {
       const { events, loading, auth } = this.props;
        // console.log(events);
       if (loading) return <LodingComponent/>
      return (
        <Grid>
        <Grid.Column width={10}>
        <EventList  
        auth={auth}
        events={events}
        />
        </Grid.Column>
        <Grid.Column width={6}>
           <EventActivity/>
        </Grid.Column>
         </Grid>
    )
  }
}
const mapStateToProps = state => {
 return{ events:  Object.values(state.event) }
  
}
const actions = {
  createEvent,
  updateEvent,
  deleteEvent,
  loadEvent
}
export default connect(mapStateToProps, actions)(EventDashboard);