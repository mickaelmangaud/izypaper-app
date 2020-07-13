import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login, Dashboard } from '../screens';
import { Context } from '../context';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { context } = useContext(Context);
  console.log('user', context);
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
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <AuthRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
};