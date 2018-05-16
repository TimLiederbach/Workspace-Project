import React from 'react';
import { Link } from 'react-router-dom';
 function WorkspacesList(props) {
   return (
     <ul>
       <li>Spaces will go here</li>
      {props.workspaces.map(workspace => (
        <Link to={'/workspaces/' + workspace.w_id}>
        <li key={workspace.w_id}>
          <h2>{workspace.w_name}</h2>
          <h2>{workspace.address}</h2>
        </li>
       </Link>
      ))}
     </ul>
   )
 }

 export default WorkspacesList;
