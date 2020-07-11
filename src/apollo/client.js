import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

// test env
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BASE_API_URL}`,
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default ({ children }) => (
  <ApolloProvider client={client} >
    {children}
  </ApolloProvider>
);