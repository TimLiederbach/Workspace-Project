import './LoginForm.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.onLogin(this.state);
    this.setState({
      username: '',
      email: '',
      password: '',
      isUserRegistered: true
    });
  }

  render() {
    return (
    <Form success className='form'>
      {this.state.isUserRegistered && <Redirect to ='/login'/>}
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
          Email:
          <input
            type='email'
            onChange={this.handleInputChange}
            value={this.state.email}
            name='email'
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
        <Button type='submit' className='register-button'>Register</Button>
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

export default RegisterForm;

