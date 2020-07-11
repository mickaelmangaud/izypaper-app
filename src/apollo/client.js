import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

const link = new HttpLink({
  uri: 'http://localhost:5000/graphql',
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