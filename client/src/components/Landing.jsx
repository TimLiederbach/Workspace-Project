import React from 'react';
import { Link } from 'react-router-dom';
import MySlider from './MySlider';

function Landing (props)  {

return (
  <div>

    <MySlider />
    <ul>
      <li><Link to='/workspaces'>Workspaces</Link></li>
    </ul>
  </div>
  )
}

export default Landing;

