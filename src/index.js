import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import Register from './Register';
import Welcome from './welcome';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li>
          <Link to="/App">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
      </ul>
      
      <Switch>
        <Route path="/App">
          <App />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
