import React, { useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';
import { useHistory  } from 'react-router-dom';
import { LoginWrapper } from './styled';
import { Button, Input } from '../../components';

export const Login = () => {
  const history = useHistory();
  const { context, setContext } = useContext(Context);
  const [error, setError] = React.useState('');
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const handleOnChangeInput = e => {
    setError(null)
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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

          setTimeout(() => setContext(context => ({ ...context, loaderDisplayed: false })), 800);
          history.push('/dashboard');
        })
        .catch(error => {
          console.log(error.response.status)
          if (error.response.status === 401);
          setError('Identifiants incorrects');
        })
  }

  console.log('cred', credentials)
  
  return (
    <LoginWrapper>
      <div className="infos">
        
      </div>
      <div className="form">
        <form onSubmit={login}>
          <h1>LOGIN</h1>
          <Input
            label="Email"
            placeholder="Email ..."
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleOnChangeInput}
          />
          <Input
            className="input"
            label={'Mot de passe'}
            placeholder="Mot de passe ..."
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleOnChangeInput}
          />
          <Button 
            disabled={true}
            label={'Se connecter'}
          />
        {error && <p style={{
          position: 'relative'
        }}>{error}</p>}
        </form>
      </div>
    </LoginWrapper>
  )
};