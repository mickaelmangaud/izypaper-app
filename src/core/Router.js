import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Dashboard, NotFound404, CreateBusiness, Register } from '../screens';

const AuthRoute = ({ component: Component, ...rest }) => {
  const state = JSON.parse(localStorage.getItem(process.env.REACT_APP_CONTEXT_NAME));
  return (
    <Route
      {...rest}
      render={(props) => 
        !state || !state.auth.isAuthenticated
        ? <Redirect to="/" /> 
        : <Component {...props} />
      }
    />
  );
}

export const AppRouter = () => {
  return(
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/inscription" component={Register} /> */}
      <Route exact path="/creer-mon-entreprise" component={CreateBusiness} />
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound404} />
    </Switch>
  )
};