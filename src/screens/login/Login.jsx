import React, { useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';
import { useHistory  } from 'react-router-dom';
import { LoginWrapper } from './styled';

export const Login = () => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const { context, setContext } = useContext(Context);
  const history = useHistory();
  const handleOnChangeInput = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const login = async evt => {
    evt.preventDefault();

      axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, credentials, { withCredentials: true })
        .then(response => {
          setContext(context => ({ ...context, loaderDisplayed: true }));

          setContext(context => ({ 
            ...context, 
            auth: { 
              isAuthenticated: true,
              user: response.data.user,
              error: null 
          }}));

          setTimeout(
            () => setContext(context => ({ ...context, loaderDisplayed: false })),
            800
          );
          
          history.push('/dashboard');
        })
        .catch(error => {
          setContext(context => ({
            ...context,
            drawerOpen: false,
            auth: {
              user: null,
              isAuthenticated: false,
              error: error.message },
          }))
        })
  }

  return (
    <LoginWrapper>
      <div className="infos">
        
      </div>
      <div className="form">
        <form onSubmit={login}>
          <h1>LOGIN</h1>
          <input 
            placeholder="Email ..."
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleOnChangeInput}
          />
          <input
            placeholder="Mot de passe ..."
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleOnChangeInput}
          />
          <button>Connexion</button>
        </form>
      </div>
    </LoginWrapper>
  )
};