import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import DashboardSidebar from './Components/DashboardSidebar';
import { LoginPage } from './Pages/Login/LoginPage';

function App() {
  const [loginDetails, setLoginDetails] = useState({});
  const user_session = document.cookie.replace(/(?:(?:^|.*;\s*)user_session\s*=\s*([^;]*).*$)|^.*$/, "$1");
  const user_Id = document.cookie.replace(/(?:(?:^|.*;\s*)user_Id\s*=\s*([^;]*).*$)|^.*$/, "$1");

  return (
    <>
      <BrowserRouter>
        <div>
          <PrivateRoute
            component={DashboardSidebar}
            userId={user_Id}
            authToken={user_session}
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
