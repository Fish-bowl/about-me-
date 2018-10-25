import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import { Link, withRouter } from 'react-router-dom';
import {
  Menu,
} from 'semantic-ui-react'

const styles = {
  rightNav: {
    display: 'flex',
    flexDirection: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  register: {
  },

  login: {
  },

  logoutNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logout: {
    alignSelf: 'center'
  }
}

class RightNavs extends React.Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;
    if (user.id) {
      return (
        <div style={styles.logoutNav} >
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
            style={styles.logout}
          />
        </div>

      );
    }
    return (

      <div style={styles.rightNav}>
        <Link style={styles.register} to='/register'>
          <Menu.Item name='Register' />
        </Link>



        <Link style={styles.login} to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </div>

    );
  }

  render() {
    return this.rightNavs()
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(RightNavs);
