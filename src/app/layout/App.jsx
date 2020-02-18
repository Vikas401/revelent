import React, { Component, Fragment } from 'react'
import EventDashboard from '../../features/event/eventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Homepage from '../../features/home/Homepage';
import EventDetailsPage from '../../features/event/EventDetails/EventDetailsPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import UserDetailPage from '../../features/user/UserDetailed/UserDetailPage';
import TestComponent from '../../features/testComponent/TestComponent';
import ModalManager from '../../features/modals/ModalManager';
import { connect } from 'react-redux';
import EventDelete from '../../features/event/EventDelete/EventDelete';
//  import { getProfile } from '../../features/auth/authActions';


 class App extends Component {
    //  componentDidMount(){
    //    this.props.getProfile();
    //  }
  render() {
     const { auth } = this.props;
      
       
     
     return (
      <Fragment>
      <ModalManager/>
      <Route exact path='/' component={Homepage}/>
      <Route
       path='/(.+)' 
       render={() => (
       <Fragment>
        <NavBar />
        <Container className='main'>
        <Switch key={this.props.location.key}>
        <Route exact path='/events' render={() => <EventDashboard auth={auth}/>}/>
        
        <Route path='/events/:id' component={EventDetailsPage}/>
        <Route path='/people' component={PeopleDashboard}/>
        <Route path='/Profile/:id' component={UserDetailPage}/>
        <Route path='/settings' component={SettingDashboard}/>
        <Route path={['/createEvent','/manage/:id' ]} component={EventForm}/>
        <Route path='/delete/:id' component={EventDelete}/>
        <Route path='/test' component={TestComponent}/>
        </Switch>
        </Container>
        </Fragment>
        
      )}/>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
})


export default withRouter(connect(mapStateToProps)(App));