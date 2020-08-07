import { HttpLink } from '@apollo/client';

export const link = new HttpLink({
  uri: `${process.env.REACT_APP_BASE_API_URL}/graphql`,
  credentials: 'include',
});