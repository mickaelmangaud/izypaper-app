import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';
import { useHistory  } from 'react-router-dom';
import { LoginWrapper } from './styled';
import { Button, Input } from '../../components';
import { validateLogin } from './validate';
import { axios } from '../../utils';
import { useSpring, animated } from 'react-spring';

export const Login = () => {
  const history = useHistory();
  const { state, addUserToContext, showLoader, hideLoader } = useContext(Context);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  
  const props = useSpring({
    from: { bottom: "100vh" },
    to: { bottom: "0%" },
    config: { duration: 300 },
    delay: 300
  });

  const handleOnChangeInput = e => {
    setErrors({});
    setCredentials({ 
      ...credentials, 
      [e.target.name]: e.target.value
    });
  };

  const login = async e => {
    e.preventDefault();
    const errors = validateLogin(credentials);

    if (errors.email || errors.password) {
      setErrors({ ...errors });
    } else {
      axios.post(`/auth/login`, credentials)
      .then(response => {
        showLoader();
        addUserToContext(response.data.user);
        setTimeout(() => hideLoader(), 800);
        history.push('/dashboard');
      })
      .catch(err => {
        if (!!err.response && err.response.status === 401) {
          console.log(`Login Error :`, err);
          setErrors({ credentials: 'Identifiants incorrects' });
        }
      });
    }
  }

  useEffect(() => {
    if(state.auth.isAuthenticated) {
      showLoader();
      history.push('/dashboard');
      setTimeout(() => hideLoader(), 800);
    }
  }, [history, state.auth.isAuthenticated,showLoader, hideLoader]);

  const handleBackToWebsite = () => window.location = 'https://www.izypaper.com';

  return (
    <LoginWrapper>
      <div className="back-arrow" onClick={handleBackToWebsite}>
        <span className="material-icons">
          keyboard_arrow_left
        </span>
        <p>Retour au site web</p>
      </div>
      <div className="infos">
        
      </div>
      <div className="form-wrapper">
        <animated.form onSubmit={login} style={props}>
          <h1>Connexion</h1>
          <Input
            label="Email"
            type="text"
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
            {Object.values(errors).map(value => value && 
              <p key={value}>
                {value}
              </p>
            )}
          </div>
        </animated.form>
      </div>
    </LoginWrapper>
  )
};