import React, { Component } from 'react';
import jwt from 'jwt-js';
import './App.css';
import WorkspacesList from './components/WorkspacesList'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      workspaces: [],
      currentUser: null
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
        this.handleLogin =this.handleLogin.bind(this);
      })
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
    .catch(err => {
      console.log(err);
    })
    })
}

handleLogin(creds) {
  this.loginRequest(creds);
}


   render() {
     return (
      <Router>
       <div className="App">

        <NavBar />

        <h1>workspaces</h1>
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


       </div>
       </Router>
     );
   }
 }

 export default App;
