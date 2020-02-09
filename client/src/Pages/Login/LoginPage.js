import LoginView from './LoginView';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Redirect } from "react-router-dom";

export function LoginPage(props) {
  if (props.authToken) {
    return <Redirect to="/" />
  }

  const client = new ApolloClient({
    uri:
      "https://vo5gslmblnf35if2uyk66gyaha.appsync-api.us-east-2.amazonaws.com/graphql",
    headers: {
      Authorization: props.authToken,
      UserID: props.userId,
      'X-API-Key': "da2-xjyw5bfjrra3floexhzqplyjda"
    }
  });

  return (
    <ApolloProvider client={client}>
      <LoginView {...props} />
    </ApolloProvider>
  );
}
