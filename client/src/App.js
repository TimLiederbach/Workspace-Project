import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorkspacesList from './components/WorkspacesList'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">

//       </div>
//     );
//   }
// }

// export default App;


class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      workspaces: []
    };
  }

  fetchWorkspaces() {
    fetch('/api/workspaces/')
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(resBody => {
        this.setState({
          workspaces: resBody.data
        })
      });
  }

  componentDidMount() {
    this.fetchWorkspaces();
  }

   render() {
     return (
       <div className="App">
         <h1>workspaces</h1>
          <WorkspacesList workspaces={this.state.workspaces} />

       </div>
     );
   }
 }

 export default App;
