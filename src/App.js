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
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/welcome" component={Welcome} />          
      </Switch>
      
    </Router>
    
  );
}