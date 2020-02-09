import DashboardView from "./DashboardView";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export function DashboardPage(props) {
  // Apollo client setup
  const client = new ApolloClient({
    uri:
      "https://vo5gslmblnf35if2uyk66gyaha.appsync-api.us-east-2.amazonaws.com/graphql",
    headers: {
      Authorization: props.authToken,
      UserID: props.userId,
      'X-API-KEY': "da2-xjyw5bfjrra3floexhzqplyjda"
    }
  });

  return (
    <ApolloProvider client={client}>
      <DashboardView {...props} />
    </ApolloProvider>
  );
}
