import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register';
//import Welcome from './welcome';
import MainLayout from './MainLayout';

export default function App() {

  return (      
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/" component={MainLayout} />          
    </Switch>    
  );
}