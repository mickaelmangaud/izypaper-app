import React from 'react';
import { ScreenWrapper, Paper } from '../../components';
import { gql, useQuery } from '@apollo/client';

export const Dashboard = () => {
  const { data } = useQuery(APOLLO_QUERY)

  return (
    <ScreenWrapper>
      <h1 style={{fontSize: '48px', color: '#048b9a', marginBottom: '24px'}}>
        Bienvenue {!!data && data.currentUser.email}
      </h1>
      <Paper>
        Dashboard
      </Paper>
    </ScreenWrapper>
  )
};
  
const APOLLO_QUERY = gql`
  query {
    currentUser {
      id
      email
    }
  }
`;