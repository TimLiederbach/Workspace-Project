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

const WorkspacesList = (props) => (


  <Card>

    <Image src={Work}/>
    <Card.Content>
      <Card.Header>
        La Pan Quotidien
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
       <ul>
         {props.workspaces.map(workspace => (
         <Link to={'/workspaces/' + workspace.w_id}>
         <li key={workspace.w_id}>
           <h4>{workspace.w_name}</h4>
           <h4>Address: {workspace.address}</h4>
           <h4>Rating: {workspace.overall_rating}</h4>
         </li>
        </Link>
       ))}
      </ul>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
         52 followers
      </a>
    </Card.Content>

  </Card>



)

export default WorkspacesList

