import React, { Component } from 'react';
import jwt from 'jwt-js';
import './App.css';
import WorkspacesList from './components/WorkspacesList';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreateWorkspace from './components/CreateWorkspace';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Workspace from './components/Workspace';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect } from 'react-router-dom';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      workspaces: [],
      currentUser: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.findWorkspace = this.findWorkspace.bind(this);

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

checkToken()  {
  const authToken = localStorage.getItem('authToken');
    fetch('/api/auth', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.message);
        return resp.json()
      })
      .then(respBody => {
        this.setState({
          currentUser: respBody.user
        })
      })
      .catch(err => {
        console.log('not logged in');
        localStorage.removeItem('authToken');
        this.setState({
          currentUser: null
        });
      })
}

  findWorkspace(id) {
    console.log(`This is the workspace to select: ${id}`);
    const index = this.state.workspaces.findIndex((wspace) => wspace.w_id === parseInt(id, 10));
    console.log('findWorkspace - id, index ', id, index);
    return index;
  }

componentDidMount() {
  this.fetchWorkspaces();
  this.checkToken();
}

loginRequest(creds) {
  console.log('attempting to log in with creds:');
  console.log(creds);
  fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(resp => {
      console.log('this is resp', resp)
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      console.log(respBody);
      localStorage.setItem('authToken', respBody.token)
      this.setState({
        currentUser: jwt.decodeToken(respBody.token).payload
      })
    })
    .catch(err => {
      console.log(err);
    })
}

registerRequest(creds) {
  console.log('attempting to register');
  console.log(creds);
  fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(resp => {
      console.log('this is resp', resp)
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .catch(err => {
      console.log(err);
    })
}

createWorkspace(workspace) {
  fetch('/api/workspaces/', {
    method: 'POST',
    body: JSON.stringify(workspace),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(resp => {
      console.log('this is resp', resp)
      if (!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .catch(err => {
      console.log(err);
    })
}

handleLogin(creds) {
  this.loginRequest(creds);
}

handleRegister(creds) {
  console.log(creds)
  this.registerRequest(creds);
}

handleCreate(workspace) {
  console.log(workspace)
  // this.createWorkspace(workspace);
}

render() {
  return (
    <Router>
      <div className="App">
        <NavBar currentUser = {this.state.currentUser} />
        <Route
          exact path = "/"
          component = { Landing }
        />
        <Route
          path = "/login"
          render = { () => (<LoginForm onLogin={this.handleLogin} />)}
        />
        <Route
          path = "/register"
          render = { () => (<RegisterForm onLogin={this.handleRegister} />)}
        />
        <Route
          exact path = "/workspaces"
          render={(props) => (
              <WorkspacesList workspaces={this.state.workspaces} />
            )}
        />
        <Route
          path = "/workspaces/create"
          render = { (props) => (
            <CreateWorkspace
              currentUser = {this.state.currentUser}
              history = {props.history}
              onLogin={this.handleCreate} />
            )}
         />
        <Route
          path = "/workspaces/:id"
          render={(props) => (
              <Workspace
              workspace={this.findWorkspace(props.match.params.id)}
              workspaces={this.state.workspaces} />
            )}
          />
      </div>
    </Router>
     );
   }
 }

 export default App;

/*       <h1>workspaces</h1>
        <WorkspacesList workspaces={this.state.workspaces} />
        <nav>
             {this.state.currentUser && <Link to='/new'>Create</Link>}
       </nav>

        {!this.state.currentUser && <LoginForm
           onLogin={this.handleLogin}
         />}

         <Route
            render={() => (<LoginForm onSubmit={this.handleSubmit} />)}
            path='/new'
          />
*/
