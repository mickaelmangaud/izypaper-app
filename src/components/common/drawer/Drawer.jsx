import React, { useContext } from 'react';
import { DrawerWrapper } from './styled';
import { avatar } from '../../../assets/images';
import { Context } from '../../../context';
import { DE_AUTHENTICATE, AUTH_ERROR } from '../../../context/actions';
import { useQuery, gql } from '@apollo/client';
import axios from 'axios';

export const Drawer = () => {
  const { state, dispatch } = useContext(Context);
  const { data } = useQuery(APOLLO_QUERY);

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/logout`, { withCredentials: true });
      dispatch({ type: DE_AUTHENTICATE });
      // window.localStorage.clear(process.env.REACT_APP_CONTEXT_NAME);
      window.location = 'http://www.izypaper.com';
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.message });
    }
  }

  return (
    <DrawerWrapper open={state.drawerOpen}>
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

const APOLLO_QUERY = gql`
  query {
    currentUser {
      id
      email
    }
  }
`;