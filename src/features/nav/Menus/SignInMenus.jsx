import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

 const SignInMenus = ({signOut, auth}) => {
    
    return (
         
        <Menu.Item position="right">
        
        <Image avatar spaced="right" src='/assets/user.png' />
      
         <Dropdown pointing="top left" text={auth.userName}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/createEvent' text="Create Event" icon="plus" />
            <Dropdown.Item as={Link} to='/events' text="My Events" icon="calendar" />
            <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
          </Dropdown.Menu>
        </Dropdown>
      
      </Menu.Item>
     
        
    )
}
export default SignInMenus;
