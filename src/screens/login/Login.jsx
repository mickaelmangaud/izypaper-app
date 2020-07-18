import React, { useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';
import { useHistory  } from 'react-router-dom';
import { LoginWrapper } from './styled';
import { Button, Input } from '../../components';
import { validateLogin } from './validate';

export const Login = () => {
  const history = useHistory();
  const { setContext } = useContext(Context);
  const [errors, setErrors] = React.useState({});
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const handleOnChangeInput = e => {
    setErrors({});
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async evt => {
    evt.preventDefault();
    const errors = validateLogin(credentials);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      console.log('post')
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
        if (!!error.response && error.response.status === 401) {
          setErrors({credentials: 'Identifiants incorrects'});
        }
      })
    }
  }
  console.log('errors', errors)
  return (
    <LoginWrapper>
      <div className="infos">
        
      </div>
      <div className="form-wrapper">
        <form onSubmit={login}>
          <h1>LOGIN</h1>
          <Input
            label="Email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleOnChangeInput}
            error={!!errors.email || !!errors.credentials}
          />
          <Input
            className="input"
            label={'Mot de passe'}
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleOnChangeInput}
            error={!!errors.password || !!errors.credentials}
          />
          <Button 
            disabled={true}
            label={'Se connecter'}
            />
          <div className="errors">
            {!!errors && Object.values(errors).map(value => (
              <p key={value}>{value}</p>
            ))}
          </div>
        </form>
      </div>
    </LoginWrapper>
  )
};