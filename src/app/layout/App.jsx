import React, { Component, Fragment } from 'react'
import EventDashboard from '../../features/event/eventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Homepage from '../../features/home/Homepage';
import EventDetailsPage from '../../features/event/EventDetails/EventDetailsPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import UserDetailPage from '../../features/user/UserDetailed/UserDetailPage';

 class App extends Component {
  render() {
    return (
      <Fragment>
      <Route exact path='/' component={Homepage}/>
      <Route
       path='/(.+)' 
       render={() => (
       <Fragment>
        <NavBar/>
        <Container className='main'>
        <Route path='/events' component={EventDashboard}/>
        <Route path='/events/:id' component={EventDetailsPage}/>
        <Route path='/people' component={PeopleDashboard}/>
        <Route path='/Profile/:id' component={UserDetailPage}/>
        <Route path='/settings' component={SettingDashboard}/>
        <Route path='/createEvent' component={EventForm}/>
        </Container>
        </Fragment>
        
      )}/>
      </Fragment>
    )
  }
}
export default App;