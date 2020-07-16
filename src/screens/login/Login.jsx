import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import axios from 'axios';

const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  .infos {
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
  }

  .form { flex: 1 }
`;

export const Login = () => {
  const { setContext } = useContext(Context);

  const login = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, {
        email: 'mickaelmangaud@gmail.com',
        password: 'okcomputer'
      }, { withCredentials: true });

      setContext( context => ({ ...context, auth: { isAuthenticated: true, user: response.data.user, error: null }}));

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

  return (
    <LoginWrapper>
      <div className="infos">
        <Link to="dashboard" >dashboard</Link>
      </div>
      <div className="form">
        <button 
          onClick={login}
          className="login">
          login
        </button>
        <button 
          onClick={logout}
          className="login">
          logout
        </button>

      </div>
    </LoginWrapper>
  )
};