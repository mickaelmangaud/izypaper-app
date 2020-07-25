import React, { useContext } from 'react';
import { DrawerWrapper } from './styled';
import { avatar } from '../../../assets/images';
import { Context } from '../../../context';
import { useQuery, gql } from '@apollo/client';
import { axios } from '../../../utils';

export const Drawer = () => {
  const { state, deAuthenticate, authError } = useContext(Context);
  const { data } = useQuery(APOLLO_QUERY);

  const logout = async () => {
    try {
      await axios.get(`/auth/logout`);
      deAuthenticate();
      window.localStorage.clear('izycontext');
      window.localStorage.clear('izypaper-apollo-cache')
      window.location.reload();
    } catch (error) {
      authError(error.message);
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