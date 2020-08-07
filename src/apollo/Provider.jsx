import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';
import { client } from './client';
import { cache } from './cache';

export default class Apollo extends React.Component {
  async componentDidMount() {
    await persistCache({
      cache,
      storage: window.localStorage,
      trigger: 'write', // default
      debounce: 1000, // default for 'write'
      key: 'izyapollocache',
      debug: true, // implement node env
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