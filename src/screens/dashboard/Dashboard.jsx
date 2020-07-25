import React from 'react';
import { ScreenWrapper, Paper } from '../../components';
import { gql, useQuery } from '@apollo/client';

export const Dashboard = () => {
  const { data } = useQuery(APOLLO_QUERY)

  return (
    <ScreenWrapper>
      <h1 style={{fontSize: '36px', color: '#048b9a', marginBottom: '24px'}}>
        Dashboard
      </h1>
      <Paper>
        Bienvenue {!!data && data.currentUser.email}
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