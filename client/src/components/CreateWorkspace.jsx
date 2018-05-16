import './Create.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { Button, Form, Message, Divider  } from 'semantic-ui-react';
import MapApp from './MapApp';

class CreateWorkspace extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
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
    this.props.onLogin({...this.state, creator_id: this.props.currentUser.username});
    this.setState({
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
    this.props.history.push('/workspaces')
  }

  render() {
    return (

<div className='mapContainer' >
<div className='create-box'>
    <Form success className='form'>
      <form onSubmit={this.handleSubmit}>

      <div className='second-column'>
        <label>
          Workspace Name:
          <input
            label='Workspace Name'
            type='text'
            onChange={this.handleInputChange}
            value={this.state.w_name}
            name='w_name'
          />
        </label>

       <Divider hidden />

        <label>
          Address:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.address}
            name='address'
          />
        </label>

      <Divider hidden />

        <label>
          Photo URL:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.photo}
            name='photo'
          />
        </label>
      </div>

<Divider hidden />

      <div className='second-column'>
        <label>
          Type of Space:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.type_of_space}
            name='type_of_space'
          />
        </label>

      <Divider hidden />

        <label>
          Power Outlet Access:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.power_outlets}
            name='power_outlets'
          />
        </label>

      <Divider hidden />
         <label>
          Noise Level:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.noise_level}
            name='noise_level'
          />
        </label>
      </div>

    <Divider hidden />

      <div className='second-column'>
        <label>
          Wifi Speed:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.wifi_speed}
            name='wifi_speed'
          />
        </label>


<Divider hidden />

        <label>
          Dog Friendly:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.dogfriendly}
            name='dogfriendly'
          />
        </label>
   <Divider hidden />
        <label>
          Overall Rating (1-5):
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.overall_rating}
            name='overall_rating'
          />
        </label>


        </div>
<Divider hidden />
        <label>
          Comments:
          <input
            type='text'
            onChange={this.handleInputChange}
            value={this.state.comments}
            name='comments'
          />
        </label>

          <Divider hidden />
        <Button type='submit' className='create-button'>Save Workspace</Button>


      </form>

  </Form>
</div>


<MapApp />
</div>



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

