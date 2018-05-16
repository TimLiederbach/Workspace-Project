// import React from 'react';
// import { Link } from 'react-router-dom';
//  function WorkspacesList(props) {
//    return (
//      <ul>
//        <li>Spaces will go here</li>
//       {props.workspaces.map(workspace => (
//         <Link to={'/workspaces/' + workspace.w_id}>
//         <li key={workspace.w_id}>
//           <h2>{workspace.w_name}</h2>
//           <h2>{workspace.address}</h2>
//         </li>
//        </Link>
//       ))}
//      </ul>
//    )
//  }

//  export default WorkspacesList;

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './List.css';
import { Link } from 'react-router-dom';
import Work from './images/workspace.jpeg';

function WorkspacesList(props) {
  return(
    <div className="card-list">
      {props.workspaces.map(workspace => (
        <Link to={'/workspaces/' + workspace.w_id}>
        <Card className="space-card" key={workspace.w_id}>
          <Image className="card-image"src={workspace.photo}/>
          <Card.Content className="card-content">
            <Card.Header>
              {workspace.w_name}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Rating: {workspace.overall_rating}
              </span>
            </Card.Meta>
            <Card.Description>
             Address: {workspace.address}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
        </Link>
      ))}
    </div>
  )
}

export default WorkspacesList

