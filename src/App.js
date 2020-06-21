import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Login from './Login'
import Register from './Register';
//import Welcome from './welcome';
import MainLayout from './MainLayout';
import { loginUser } from './redux/actions/authActions';
 
if(localStorage.fabricspa) {
  const phone = localStorage.getItem('fabricspa');
  store.dispatch(loginUser(phone))
}

export default function App() {

  return (    
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor} >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/" component={MainLayout} />          
        </Switch>
      </PersistGate>
    </Provider>  
  );
}