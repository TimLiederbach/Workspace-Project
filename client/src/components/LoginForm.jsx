import './LoginForm.css';

// import React from 'react'
// import { Button, Form, Message } from 'semantic-ui-react'

// const FormExampleSuccess = () => (
//   <Form success>
//     <Form.Input label='email'
//         placeholder='joe@schmoe.com'
//         type='text'
//         onChange={this.handleInputChange}
//         value={this.state.email}
//         name='email'/>
//     <Message
//       success
//       header='Form Completed'
//       content="You're all signed up for the newsletter"
//     />
//     <Button>Submit</Button>
//   </Form>
// )

// export default FormExampleSuccess

import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.onLogin(this.state);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
    <Form success className='form'>
      <form onSubmit={this.handleSubmit}>
        <label>
          User Name:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.userName}
            name='userName'
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
        <Button type='submit' className='login-button'>Login</Button>
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
