import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

import DashboardSidebar from './Components/DashboardSidebar';
import { LoginPage } from './Pages/Login/LoginPage';

function App() {
  const [loginDetails, setLoginDetails] = useState({});
  const localToken = localStorage.getItem('token');
  const localUserId = localStorage.getItem('userId');
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
                  const token = 'token';
                  window.localStorage.setItem(token, loginResult.authToken);

                  const userId = 'userId';
                  window.localStorage.setItem(userId, loginResult.userId);
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
