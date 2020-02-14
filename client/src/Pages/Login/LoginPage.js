import LoginView from './LoginView';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Redirect } from "react-router-dom";

export function LoginPage(props) {
      // using regex to get the remove the strings and only getting the value that is stored

  const userSession = document.cookie.replace(/(?:(?:^|.*;\s*)user_session\s*=\s*([^;]*).*$)|^.*$/, "$1");
  const userId = document.cookie.replace(/(?:(?:^|.*;\s*)user_Id\s*=\s*([^;]*).*$)|^.*$/, "$1");

  if (props.authToken) {
    return <Redirect to="/" />
  }




  const client = new ApolloClient({
    uri:
      "https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql",
    headers: {
      Authorization: userSession,
      UserID: userId,
      "X-API-KEY": "da2-qxhe36kwhjaqjnlal4jxoeahbe"
    }
  });

  return (
    <ApolloProvider client={client}>
      <LoginView {...props} />
    </ApolloProvider>
  );
}
