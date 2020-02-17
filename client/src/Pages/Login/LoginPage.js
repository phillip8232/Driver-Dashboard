import LoginView from './LoginView';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Redirect } from 'react-router-dom';

export function LoginPage(props) {
  if (props.authToken) {
    return <Redirect to="/" />;
  }

  const client = new ApolloClient({
    uri:
      'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.authToken,
      UserID: props.userId,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu',
    },
  });

  return (
    <ApolloProvider client={client}>
      <LoginView {...props} />
    </ApolloProvider>
  );
}
