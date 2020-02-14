import React from "react";
import { Container } from "semantic-ui-react";
import LoginForm from "../../Components/Login/LoginForm";
import Navbar from "../../Components/Navbar";
import LoginHeroImage from "../../Images/loginHeroImage.jpg";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { LOGIN_QUERY } from "../../queries/queries";
import { useLazyQuery } from '@apollo/react-hooks';

const renderBody = (executeLogin) => {
  return (
    <LoginForm
      handleLogin={(email, password) => {
        executeLogin({ variables: {
          email, password
        }});
      }}
    />
  );
};

const LoginView = props => {
  const [executeLogin, { loading, data }] = useLazyQuery(LOGIN_QUERY);
  const enteredInvalidPassword = data && data.login && !data.login.successful;

  if (!loading && data && data.login && data.login.successful) {
    if(data.login.authToken != null && data.login.userId != null){
      document.cookie = `userSession=${data.login.authToken}`
      document.cookie = `userId=${data.login.userId}`
    }
    // using regex to get the remove the strings and only getting the value that is stored
    const userSession = document.cookie.replace(/(?:(?:^|.*;\s*)userSession\s*=\s*([^;]*).*$)|^.*$/, "$1");
    const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, "$1");

    props.handleLoggedIn({
      authToken: userSession,
      userId: userId
    });
    
  }

  return (
    <>
      <Container
        className="bg-image"
        style={{ backgroundImage: `url(${LoginHeroImage})` }}
      >
        <Navbar />
        { /* todo proper error bar  */}
        {enteredInvalidPassword && <p>Invalid Password</p>}
        {loading && <LoadingSpinner />}
        {renderBody(executeLogin)}
      </Container>
    </>
  );
};

export default LoginView;
