import './LoginForm.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   // this.goToWorkspaces = this.goToWorkspaces.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    console.log('handling submit')
    e.preventDefault();
    console.log(this.state)
    this.props.onLogin(this.state);
    this.setState({
      username: '',
      password: '',
      isUserLoggedIn: true
    });
  }

 // goToWorkspaces ()  {
 // {this.props.history.push('/workspaces')}
 // }


  render() {
    return (
    <Form success className='form'>
      {this.state.isUserLoggedIn && <Redirect to ='/workspaces' />}
      <form onSubmit={this.handleSubmit}>
        <label>
          User Name:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.username}
            name='username'
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            onChange={this.handleInputChange}
            value={this.state.password}
            name='password'
          />
        </label>
          <br />
        <Button
          type='submit'
          className='login-button'
          // onClick= {this.goToWorkspaces()}
        >Login
        </Button>
        <Message
            success
            header='Form Completed'
            content="You're all signed up for WrkSps"
          />

      </form>
    </Form>
    )
  }
}

export default LoginForm;
