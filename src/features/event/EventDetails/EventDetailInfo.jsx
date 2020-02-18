import React, { Fragment } from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react';

 const EventDetailInfo = ({event}) => {
      //console.log(event);
    return (
        <Fragment>
        <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            {event &&
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>}
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            {event &&
            <Grid.Column width={15}>
              <span>{event.date}</span>
            </Grid.Column>}
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            {event &&
            <Grid.Column width={11}>
              <span>{event.venue}</span>
            </Grid.Column>}
            <Grid.Column width={4}>
             
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
      </Fragment>
    )
}
export default EventDetailInfo;