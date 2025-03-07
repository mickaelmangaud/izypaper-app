import React, { useContext } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Login, Dashboard, NotFound404, CreateBusiness, Register } from '../screens';
import { Context } from '../context';
import { Soon } from '../screens/Soon';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(Context);
  return (
    <Route
      { ...rest }
      render={props => !state || !state.auth.isAuthenticated
        ? <Redirect to="/" /> : <Component { ...props } />
      }
    />
  );
}

export const AppRouter = () => {
  return(
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Soon} /> */}

        <Route exact path="/" component={Login} />
        <Route exact path="/inscription" component={Register} />
        <Route exact path="/creer-mon-entreprise" component={CreateBusiness} />
        <AuthRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </BrowserRouter>
  )
};