import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          <Link to="/login">
            Login
          </Link>
        </Menu.Item>

        <Menu.Item
          name='register'
          active={activeItem === 'Register'}
          onClick={this.handleItemClick}
        >
          <Link to = '/register'>
           Register
          </Link>
        </Menu.Item>

      </Menu>
    )
  }
}
