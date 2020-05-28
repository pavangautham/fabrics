import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login'
import Register from './Register';
import Welcome from './welcome';

export default function App() {

  return (
    <Router>      
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Welcome} />          
      </Switch>
      
    </Router>
    
  );
}