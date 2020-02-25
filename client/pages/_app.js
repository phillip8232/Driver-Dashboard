import React, { useState } from 'react';
import cookies from 'next-cookies';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import cookies from 'next-cookies';

import DashboardSidebar from './Components/DashboardSidebar';
import { LoginPage } from './Pages/Login/LoginPage';

function App() {
  const [loginDetails, setLoginDetails] = useState({});

  return (
    <>
      <BrowserRouter>
        <div>
          <PrivateRoute
            component={DashboardSidebar}
            userId={localUserId}
            authToken={localToken}
            exact
            path="/"
          />
          <Route
            render={props => (
              <LoginPage
                {...props}
                handleLoggedIn={loginResult => {
                  // TODO - you have auth token and user ID now.
                  setLoginDetails(loginResult);
                  document.cokie = `GofarDashboardToken=${loginResult.authToken}`;
                  document.cookie = `GofarDashboardUserId=${loginResult.userId}`;
                }}
                authToken={loginDetails.authToken}
              />
            )}
            exact
            path="/login"
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
