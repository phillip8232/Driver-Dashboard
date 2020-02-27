import DashboardView from '../src/pages/Dashboard/DashboardView';
import React from 'react';
import Cookies from 'js-cookie';
import Cookiez from 'next-cookies';
import fetch from 'node-fetch';
import { Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: '/graphql', fetch: fetch });

export default function DashboardPage(props) {
  console.log(
    `THIS IS COMING FROM DASH BOARD PAGE`,
    Cookies.get('GofarDashboardToken')
  );
  debugger;
  // TODO if not logged in redirect to login
  if (
    Cookies.get('GofarDashboardToken') &&
    Cookies.get('GofarDashboardUserId')
  ) {
    <Redirect to="/dashboard" />;
  } else {
    <Redirect to="/login" />;
  }

  const client = new ApolloClient({
    uri:
      'https://jt63wdhqqre6rpjo5lnylfhjqm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    headers: {
      Authorization: Cookies.get('GofarDashboardToken'),
      UserID: Cookies.get('GofarDashboardUserId'),
      'X-API-KEY': 'da2-d5trhzrnqraznclr2teue2bmmu',
    },
    fetch,
  });

  return (
    <ApolloProvider client={client}>
      <DashboardView />
    </ApolloProvider>
  );
}

DashboardPage.getInitialProps = ctx => {
  console.log(`Dashboard GetinitialProps`, ctx);
  return {
    cookiez: Cookiez(ctx) || '',
  };
};
