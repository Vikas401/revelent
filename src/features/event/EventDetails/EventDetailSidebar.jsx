import React, { Fragment } from 'react'
import { Segment, List, Item, Label } from 'semantic-ui-react';

 const EventDetailSidebar = () => {
    const isHost = false;
    return (
        <Fragment>
        <Segment
          textAlign="center"
          style={{ border: 'none' }}
          attached="top"
          secondary
          inverted
          color="teal"
        >
         
        </Segment>
        <Segment attached>
          <List relaxed divided>
         
            <Item style={{ position: 'relative' }}>
          
            <Label
              style={{ position: 'absolute' }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>
            <Item.Image size="tiny" src='' />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
               Hello welcome to our event ,you are invited with your family, friends
              </Item.Header>
            </Item.Content>
          </Item>
      
           
    
           
          </List>
        </Segment>
      </Fragment>
    )
}
export default EventDetailSidebar;