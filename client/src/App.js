import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorkspacesList from './components/WorkspacesList'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'




class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      workspaces: []
    };
  }

  fetchWorkspaces() {
    fetch('/api/workspaces')
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
        <NavBar />
        <h1>workspaces</h1>
        <WorkspacesList workspaces={this.state.workspaces} />
        <LoginForm />

       </div>
     );
   }
 }

 export default App;
