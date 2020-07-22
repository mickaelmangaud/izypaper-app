import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: `${process.env.REACT_APP_BASE_API_URL}/graphql`,
  credentials: 'include',
});

const client = new ApolloClient({
  cache,
  link
});

export default class Apollo extends React.Component {
  async componentDidMount() {
    await persistCache({
      cache,
      storage: window.localStorage,
    });
  }

  render() {
    return (
      <ApolloProvider client={client} >
        {this.props.children}
      </ApolloProvider>
    )
  }
}