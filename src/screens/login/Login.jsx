import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Context } from '../../context/ContextProvider';

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