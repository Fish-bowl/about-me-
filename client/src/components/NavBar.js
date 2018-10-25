import React, { Component } from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import RightNavs from './RightNavs'


const styles = {
  nav: {
    height: '5%',
  }
}

class NavBar extends Component {

  render() {
    return (
        <Menu pointing inverted secondary style={styles.nav}>
          <Link to='/'>
            <Menu.Item header>Max Whitaker</Menu.Item>
          </Link>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/resume'>
            <Menu.Item name='Resume' />
          </Link>
          <Link to='/games'>
            <Menu.Item name='Games'/>
          </Link>
          <Link to='/my_code'>
            <Menu.Item name='My Code' /> 
          </Link>
          {/* <RightNavs/> */}
        </Menu>
    );
  }
}



export default NavBar
