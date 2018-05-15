import React from 'react';
import { Link } from 'react-router-dom';

function Landing (props)  {

return (
  <div>
    <h1>This is the cool HD carousel of photos...think about it</h1>
    <ul>
      <li><Link to='/workspaces'>Workspaces</Link></li>
    </ul>
  </div>
  )
}

export default Landing;
