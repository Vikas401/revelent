import React from 'react'
import { Grid } from 'semantic-ui-react';
import SettingNav from './SettingNav';
import { Route, Switch, Redirect } from 'react-router-dom';
import  PhotosPage  from './Photos/PhotosPage';
import AccountPage from './AccountPage';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import { connect } from 'react-redux';


const mapStateToProps = (state) =>({
    auth: state.auth
})


 const SettingDashboard = ({ auth}) => {
        const authenticated = auth.authenticated;
       
    return (
        <Grid>
        
        <Grid.Column width={12}>
        <Switch>
        <Redirect exact from='./settings' to='./settings/about'/>
        <Route path='/settings/basic' render={() => <BasicPage currentUser={auth.currentUser} initailValues={auth.currentUser} authenticated={authenticated} />}/>
        <Route path='/settings/about' component={AboutPage}/>
        <Route path='/settings/photos' component={PhotosPage}/>
        <Route path='/settings/account' render = {() => <AccountPage /> }/>
        </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
        <SettingNav/>
        </Grid.Column>
    
        </Grid>
    )
}
export default connect(mapStateToProps)(SettingDashboard);