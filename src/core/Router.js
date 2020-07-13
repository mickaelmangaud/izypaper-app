import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login, Dashboard, NotFound404 } from '../screens';
import { Context } from '../context';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { context } = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) =>
        !context.auth.isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
}

export const Router = () => {
  return(
    <BrowserRouter basename="app.izypaper.com/">
      <Switch>
        <Route path='app.izypaper.com/login' component={Login} />
        <AuthRoute path='app.izypaper.com/login' component={Dashboard} />
        <Route path='*' component={NotFound404} />
      </Switch>
    </BrowserRouter>
  )
};