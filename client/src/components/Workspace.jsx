import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Workspace (props) {
    //console.log('Workspace this.props: ',this.props);
    // const w_idToFind = parseInt(this.props.match.params.id, 10);
    // const workspaceList = this.props.workspaces;
    // console.log('workspace - workspaceList[index]: ', workspaceList[index]);
    //console.log('Workspace -- checking...', workspaceList[2]);
    //console.log('Workspace w_idToFind:, workspaceList ', w_idToFind, workspaceList);

    // const indexOfItem = workspaceList.findIndex(curr_wksp => {
    //   return w_idToFind === curr_wksp.w_id;
    // });
    // const index = workspaceList.findIndex((curr_wksp) => w_idToFind === curr_wksp.w_id);

    // console.log('Workspaces - index', index);
    // console.log('workspace - workspaceList[index]: ', workspaceList[index]);
    // const displayItem = workspaceList[index];
    //const { address }  = workspaceList[indexOfItem];
    //console.log('workspaces displayItem', displayItem['address']);
    //debugger;
 //   console.log('workspaces displayItem', displayItem['w_id']);
  //  let w_idItem = displayItem.w_id;
    // console.log('w_id is : ',item.w_id);
    //const item = workspaces[indexOfItem];
    //console.log('Workspace item and its typeof: ', item, typeof(item));
    //const place_id=item.w_id;
    //console.log('Workspace place_id: ', place_id);

    console.log('Workspace - props: ', props);
    console.log('Workspace - workspace index', props.workspace);
    const space = props.workspaces[props.workspace];
    console.log('Workspace space',space);
    let response;
    if (!space) {

      response = <h1>Loading</h1>

    }
    else {
      response = (
        <div>
          <h1>Name: {space.w_name}</h1>
          <h2>Type of space: {space.type_of_space}</h2>
          <h3>Overall rating: {space.overall_rating}</h3>
          <img src={space.photo} alt='' />
          <p>Workspace id: {space.w_id}</p>
          <p>Address: {space.address}</p>
          <p>Noise level: {space.noise_level}</p>
          <p>power outlets: {space.power_outlets}</p>
          <p>Dog friendly: {space.dogfriendly}</p>
          <p>WIFI speed: {space.wifi_speed}</p>
          <p>Comments: {space.comments}</p>
        </div>
      )
    }
    return(
      <div>
        {response}
      </div>
    )

}
export default Workspace;
