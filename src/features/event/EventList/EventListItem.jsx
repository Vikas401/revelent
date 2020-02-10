import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
// import EventAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { deleteEvent } from '../eventActions';



 class EventListItem extends Component {

  // componentDidMount(){
  //   this.props.loadEvent(this.props.match.params.id)
  // }
 
 
  render() {
    const { event, deleteEvent } = this.props;
       
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
      <Button onClick={() => deleteEvent()} as="a" color="red" floated="right" content="Delete" />
        <Button  as={Link}  to={`/events/${event.id}`} color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
    )
  }
}
// const actions= {
//   deleteEvent
// }
// const mapStateToProps = (state) => {
//  return { events: state.event };
// }
export default connect()(EventListItem);