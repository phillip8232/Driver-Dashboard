import React from 'react';
import fetch from 'node-fetch';
import Cookies from 'js-cookie';
import Cookiez from 'next-cookies';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import LoginView from '../src/pages/Login/LoginView';
import { useRouter } from 'next/router';

function handleSuccessfulLogin(router) {
  return function(loginResult) {
    Cookies.set('GofarDashboardUserId', loginResult.userId, { expires: 7 });
    Cookies.set('GofarDashboardToken', loginResult.authToken, { expires: 7 });
    router.push('/dashboard');
  };
}

export default function LoginPage(props) {
  if (props.authToken) {
    return <Redirect to="/dashboard" />;
  }

  const router = useRouter();

  const client = new ApolloClient({
    uri:
      'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: props.authToken,
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu',
    },
    fetch,
  });
  return (
    <ApolloProvider client={client}>
      <LoginView
        {...props}
        handleSuccessfulLogin={handleSuccessfulLogin(router)}
      />
    </ApolloProvider>
  );
}

LoginPage.getInitialProps = ctx => {
  console.log(`This is coming from login page getInitalProps`, ctx);
  return {
    cookiez: Cookiez(ctx) || '',
  };
};
