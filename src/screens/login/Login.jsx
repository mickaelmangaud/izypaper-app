import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Context } from '../../context/ContextProvider';
import axios from 'axios';

export const Login = () => {
  const { data } = useQuery(APOLLO_QUERY);
  const { setContext } = useContext(Context);

  return (
    <div>
      {!!data && 
        data.users.map(user => 
          <p
            key={user.email} 
            onClick={() => setContext(context => ({ ...context, menuOpen: !context.menuOpen }))}>
            Déjà inscrit: {user.email}
          </p>
      )}
      <button onClick={() => {
        axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, {
          email: 'mickaelmangaud@gmail.com',
          password: 'okcomputer'
        },
        { withCredentials: true}
        )
          .then(data => console.log(data))
      }}>
        Login
      </button>
      <button onClick={() => {
        axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/user`, { withCredentials: true })
          .then(data => console.log(data))
      }}>
        getUser
      </button>
    </div>
  )
};

const APOLLO_QUERY = gql`
  {
    users {
      email
    }
  }
`;