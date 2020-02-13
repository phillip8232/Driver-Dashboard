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
      document.cookie = `user_session=${data.login.authToken}`
      document.cookie = `user_Id=${data.login.userId}`
    }
    // using regex to get the remove the strings and only getting the value that is stored
    const user_session = document.cookie.replace(/(?:(?:^|.*;\s*)user_session\s*=\s*([^;]*).*$)|^.*$/, "$1");
    const user_Id = document.cookie.replace(/(?:(?:^|.*;\s*)user_Id\s*=\s*([^;]*).*$)|^.*$/, "$1");

    props.handleLoggedIn({
      authToken: user_session,
      userId: user_Id
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
