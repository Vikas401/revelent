import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

 class EventList extends Component {
    render() {
        const { events, auth } = this.props;
       // console.log(events);
        return (
            <Fragment>
             {events && events.map(event => (
                 <EventListItem key={event.id} event={event} auth={auth} />
                 ))
            }
                
            </Fragment>
        )
    }
}
export default EventList;