import React, { Component } from 'react';
import './NavBar.css';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props)  {
    super(props);
  }

  render() {
    const isCurrentUser = this.props.currentUser;
    const display = isCurrentUser ? (
          <Menu stackable className='nav'>
            <Menu.Item
              name='Logout'
            >
              <Link to="/">
                Logout
              </Link>
            </Menu.Item>

            <Menu.Item
              name='Create Workspace'
            >
              <Link to = '/workspaces/create'>
               Create Workspace
              </Link>
            </Menu.Item>

            <Menu.Item
              name='Workspaces'
            >
              <Link to = '/workspaces/'>
              Workspaces
              </Link>
            </Menu.Item>
          </Menu>
        ) :
        (
          <Menu stackable>
          <Menu.Item
            name='login'
          >
            <Link to="/login">
              Login
            </Link>
          </Menu.Item>

          <Menu.Item
            name='register'
          >
            <Link to = '/register'>
             Register
            </Link>
          </Menu.Item>
          </Menu>

        )
    return (
      <div>
        { display }
      </div>
    )

  }

}

