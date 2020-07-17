import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Dashboard, NotFound404, CreateBusiness, Home, Register } from '../screens';
import { Context } from '../context';

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = false;

  const state = JSON.parse(localStorage.getItem(process.env.REACT_APP_CONTEXT_NAME));
  console.log('state', state)
  
  
  return (
    <Route
      {...rest}
      render={(props) => 
        !state || !state.auth.isAuthenticated
        ? <Redirect to="/login" /> 
        : <Component {...props} />
      }
    />
  );
}

export const AppRouter = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/inscription" component={Register} />
      <Route exact path="/login" component={Login} />
      <AuthRoute exact path="/creer-mon-entreprise" component={CreateBusiness} />
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound404} />
    </Switch>
  )
};