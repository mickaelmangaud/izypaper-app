import React from 'react';
import { ScreenWrapper, Paper } from '../../components';
import { gql, useQuery } from '@apollo/client';

export const Dashboard = () => {
  const { data } = useQuery(APOLLO_QUERY)

  return (
    <ScreenWrapper>
      <h1 style={{fontSize: '36px', color: '#048b9a', marginBottom: '24px', fontFamily: 'Ubuntu'}}>
        Dashboard
      </h1>
      
      <Paper>
        <p style={{ fontFamily: 'Ubuntu', color: 'rgba(0,0,0, .7)' }}>Bienvenue {!!data && `${data.currentUser.firstName} ${data.currentUser.lastName}`}</p>
        <br />
        <hr style={{ border: 'none', borderTop: '2px solid #048b9a'}}/>
      </Paper>
    </ScreenWrapper>
  )
};
  
const APOLLO_QUERY = gql`
  query {
    currentUser {
      firstName
      lastName
    }
  }
`;