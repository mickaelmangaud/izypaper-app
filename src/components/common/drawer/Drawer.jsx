import React, { useContext } from 'react';
import { DrawerWrapper } from './styled';
import { images } from '../../../assets';
import { Context } from '../../../context';
import { useQuery, gql } from '@apollo/client';
import { axios } from '../../../utils';

export const Drawer = () => {
  const { state, deAuthenticate, authError, closeDrawer } = useContext(Context);
  const { data } = useQuery(APOLLO_QUERY);

  const logout = async () => {
    try {
      await axios.get(`/auth/logout`);
      deAuthenticate();
      window.localStorage.clear('izycontext');
      window.localStorage.clear('izyapollocache')
      window.location.reload();
    } catch (error) {
      authError(error.message);
    }
  }

  return (
    <DrawerWrapper open={state.drawerOpen}>
      <span className="material-icons close" onClick={closeDrawer}>
        close
      </span>
      <span className="material-icons quit" onClick={logout}>
        exit_to_app
      </span>

      <div className="userinfos">
        <img src={images.avatar} alt="user avatar" className="avatar" />
        <h1 className="username">
          {!!data && `${data.currentUser.firstName} ${data.currentUser.lastName}`}
        </h1>
        <p className="email">
          {!!data && `${data.currentUser.email}`}
        </p>
      </div>

      <div className="content">
        Content
      </div>
      
      <div className="footer">
        Footer
      </div>
    </DrawerWrapper>
  )
}

const APOLLO_QUERY = gql`
  query {
    currentUser {
      id
      firstName
      lastName
      email
    }
  }
`;