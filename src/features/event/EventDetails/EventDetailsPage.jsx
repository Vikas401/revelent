import React from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventDetailHeader from './EventDetailHeader';
import EventDetailInfo from './EventDetailInfo';
 import EventDetailChat from './EventDetailChat';
 import EventDetailSidebar from './EventDetailSidebar';
 import { loadEvent } from '../eventActions';    
 

 const actions = {
   loadEvent
 }

 const EventDetailsPage =({ event }) => {
       
    return (
      <Grid>
      <Grid.Column width={10}>
      <EventDetailHeader event={event}/>
      <EventDetailInfo event={event}/>
      <EventDetailChat/>
      </Grid.Column>
      <Grid.Column width={6}>
        
       <EventDetailSidebar/>
      </Grid.Column>
      </Grid>
   );
  }


const mapStateToProps = (state, ownProps) => {
   const eventId = ownProps.match.params.id;
   

   let event = {};
    let events =  Object.values(state.event);
    //console.log(events)
   if(eventId && events.length > 0){
      // console.log(events.length);
     event = events.filter(event => event.id === eventId)[0];
    // console.log(event);
   }
  return{
    event
  }
}
export default connect(mapStateToProps, actions)(EventDetailsPage);
