import React, { Component } from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';



const styles = {
  nav: {
    height: '5%',
    paddingTop: '12px',
    
  }
}

class NavBar extends Component {

  render() {
    return (
        <Menu pointing inverted secondary style={styles.nav}>
          <Link to='/'>
            <Menu.Item header>Max Whitaker</Menu.Item>
          </Link>
          <Link to='/hiring'>
            <Menu.Item name='Hire Me' />
          </Link>
          <Link to='/projects'>
            <Menu.Item name='My Projects'/>
          </Link>
          <Link to='/my_code'>
            <Menu.Item name='My Code' /> 
          </Link>
        </Menu>
    );
  }
}



export default NavBar
