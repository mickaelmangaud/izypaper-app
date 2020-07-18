import React from 'react';
import { DrawerWrapper } from './styled';
import { avatar } from '../../../assets/images';
import { Context } from '../../../context';
import axios from 'axios';
import { useQuery, gql } from '@apollo/client';

const APOLLO_QUERY = gql`
  query {
    currentUser {
      id
      email
    }
  }
`;

export const Drawer = () => {
  const { context, setContext } = React.useContext(Context);
  const { data } = useQuery(APOLLO_QUERY);

  if (data) {
    console.log('apollo data', data);
  }

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/logout`, { withCredentials: true });

      setContext(context => ({ 
        ...context,
        drawerOpen: false,
        auth: { 
          user: null,
          isAuthenticated: false,
          error: null 
      }}));

      window.localStorage.clear(process.env.REACT_APP_CONTEXT_NAME)
      window.location.pathname = '/'
    } catch (error) {
      setContext( context => ({ 
        ...context, 
        auth: { user: error.message, isAuthenticated: false, error: error.message }, 
        drawerOpen: false
      }))
    }
  }

  return (
    <DrawerWrapper open={context.drawerOpen}>
      <div className="userinfos">
        <img src={avatar} alt="user avatar" className="avatar"/>
        <h1 className="username">{!!data && data.currentUser.email}</h1>
        <p className="description">Juriste chez Novaltis Consulting</p>
      </div>
      <div className="content">
        content
      </div>
      <div className="footer">
        <p onClick={logout}>Déconnexion</p>
      </div>
    </DrawerWrapper>
  )
}
