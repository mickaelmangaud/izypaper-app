import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Dashboard, NotFound404, CreateBusiness, Home, Register } from '../screens';
import { Context } from '../context';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { context } = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) => 
        !context.auth.isAuthenticated 
        ? <Redirect to="/login" /> 
        : <Component {...props} />
      }
    />
  );
}

export const Router = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/inscription" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/creer-mon-entreprise" component={CreateBusiness} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound404} />
    </Switch>
  )
};