import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import axios from 'axios';
import { background } from '../../assets/images';
import { useHistory  } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  .infos {
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center left;
    margin-left: -1px;
  }

  .form { 
    flex: 1;

    

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20%;
      height: 100%;

      h1 {
        margin-bottom: 80px;
        color: ${(({ theme }) => theme.colors.primary )};
        text-align: center;
        font-size: 42px;
      }

      input, button {
        width: 80%;
        margin-bottom: 24px;
        height: 40px;
        border: none;
        background-color: #ccc;
        border-radius: 3px;
        padding: 8px 12px;
      }

      button {
        background-color: ${({ theme}) => theme.colors.primary };
        color: white;
        font-size: 18px;
        &:hover {
          background-color: ${({ theme }) => `rgba(${theme.colors.primary}, .2)`};
        }
      }
    }
  }
`;

export const Login = () => {
  const { context, setContext } = useContext(Context);
  const history = useHistory();

  const login = async evt => {
    evt.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, {
        email: 'mickaelmangaud@gmail.com',
        password: 'okcomputer'
      }, { withCredentials: true });
      setContext({ ...context, loaderDisplayed: true });
      history.push('/dashboard');
      setContext( context => ({ ...context, auth: { isAuthenticated: true, user: response.data.user, error: null }}));
      setTimeout(() => setContext({ ...context, loaderDisplayed: false }), 800);
    } catch (error) {
      setContext( context => ({ ...context, auth: { isAuthenticated: false, user: null, error: error.message }}));
    }
  }

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/logout`, { withCredentials: true });
      setContext( context => ({ ...context, auth: { isAuthenticated: false, user: null, error: null }}));
    } catch (error) {
      console.log('LOGOUT', error);
    }
  }

  // const handleSubmitLogin = evt => {
  //   evt.preventDefault();
  //   history.push('/dashboard');
  // }

  return (
    <LoginWrapper>
      <div className="infos">
        
      </div>
      <div className="form">
        <form onSubmit={login}>
          <h1>LOGIN</h1>
          <input placeholder="Email ..." type="email"/>
          <input placeholder="Mot de passe ..." type="password"/>
          <button>Connexion</button>
        </form>
      </div>
    </LoginWrapper>
  )
};