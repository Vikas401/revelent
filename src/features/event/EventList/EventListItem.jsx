import React, { Component } from 'react'
import { Segment, Item, Icon, Button } from 'semantic-ui-react';
//import EventAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
// import EventDelete from '../EventDelete/EventDelete';


 class EventListItem extends Component {

  
  render() {
    const { event } = this.props;
   
       
    return (  
      <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>       
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header >{event.title}</Item.Header>
              <Item.Description>
                Hosted by {event.hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date} |
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
      
      </Segment>
      <Segment clearing>{event.description}
      
      <Button  as={Link} to={`/delete/${event.id}`} color="red" floated="right" content="Delete" />
    
    
        <Button  as={Link}  to={`/events/${event.id}`} color="teal" floated="right" content="View" />
    
        </Segment>
    </Segment.Group>
    )
  }
}


export default EventListItem;