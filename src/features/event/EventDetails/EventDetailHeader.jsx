import React, { Fragment } from 'react'
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};


 class EventDetailHeader extends React.Component {

  
  render(){
      const { event } = this.props;
    return (
        <Fragment>
        <Segment.Group>
        
      <Segment basic attached="top" style={{ padding: '0' }}>
      {event &&
        <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid style = {eventImageStyle}/>}

        <Segment basic style = {eventImageTextStyle}>
          <Item.Group>
            <Item>
            {event &&
              <Item.Content>
              
                <Header
                  size="huge"
                  content= {event.title}
                  style={{ color: 'white' }}
                />
              
                
                <p>{event.date}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>}
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
       
        <Button color="teal" >JOIN THIS EVENT</Button>
        {event &&
        <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
          Manage Event
        </Button>}
      </Segment>
    </Segment.Group>
    </Fragment>
    )
}}
export default EventDetailHeader;