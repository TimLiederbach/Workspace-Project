import './LoginForm.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { Button, Form, Message } from 'semantic-ui-react';


class CreateWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creator_id: '',
      w_name: '',
      address: '',
      photo: '',
      type_of_space: '',
      power_outlets: '',
      noise_level: '',
      wifi_speed: '',
      dogfriendly: '',
      comments: '',
      overall_rating: ''
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
      creator_id: '',
      w_name: '',
      address: '',
      photo: '',
      type_of_space: '',
      power_outlets: '',
      noise_level: '',
      wifi_speed: '',
      dogfriendly: '',
      comments: '',
      overall_rating: ''
    });
  }

  render() {
    return (
    <Form success className='form'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Workspace Name:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.w_name}
            name='w_name'
          />
        </label>

        <label>
          Address:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.address}
            name='address'
          />
        </label>

        <br />
        <label>
          Photo URL:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.photo}
            name='photo'
          />
        </label>
        <br />
        <label>
          Type of Space:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.type_of_space}
            name='type_of_space'
          />
        </label>

        <label>
          Power Outlet Access:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.power_outlets}
            name='power_outlets'
          />
        </label>

        <label>
          Noise Level:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.noise_level}
            name='noise_level'
          />
        </label>

        <label>
          Wifi Speed:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.wifi_speed}
            name='wifi_speed'
          />
        </label>

        <label>
          Dog Friendly:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.dogfriendly}
            name='dogfriendly'
          />
        </label>

        <label>
          Comments:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.comments}
            name='comments'
          />
        </label>

        <label>
          Overall Rating (1-5):
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.overall_rating}
            name='overall_rating'
          />
        </label>

          <br />
        <Button type='submit' className='create-button'>Save Workspace</Button>
        <Message
            success
            header='Form Completed'
            content="You created a Workspace"
          />

      </form>
    </Form>
    )
  }
}

export default CreateWorkspace;

/*        <h3>Pick the type of workspace</h3>

        <RadioGroup onChange={ this.handleRadioChange } horizontal>
          <RadioButton name='type_of_space' value="Cafe/Coffee Shop">
            Cafe/Coffee Shop
          </RadioButton>
          <RadioButton name='type_of_space' value="Restaurant/Bar">
            Restaurant/Bar
          </RadioButton>
          <RadioButton name='type_of_space' value="Library">
            Library
          </RadioButton>
          <RadioButton name='type_of_space' value="Outdoor Space/Park">
            Outdoor Space/Park
          </RadioButton>
        </RadioGroup>
        */

