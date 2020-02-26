import React from 'react';
import { Container } from 'semantic-ui-react';
import LoginForm from '../../Components/Login/LoginForm';
import LoginHeroImage from '../../Images/loginHeroImage.jpg';
import LoadingSpinner from '../../Components/LoadingSpinner';
import { LOGIN_QUERY } from '../../queries/queries';
import { useLazyQuery } from '@apollo/react-hooks';

const renderBody = executeLogin => {
  return (
    <LoginForm
      handleLogin={(email, password) => {
        executeLogin({
          variables: {
            email,
            password,
          },
        });
      }}
    />
  );
};

const LoginView = props => {
  const [executeLogin, { loading, data }] = useLazyQuery(LOGIN_QUERY);
  const enteredInvalidPassword = data && data.login && !data.login.successful;

  if (!loading && data && data.login && data.login.successful) {
    props.handleLoggedIn({
      authToken: data.login.authToken,
      userId: data.login.userId,
    });
  }

  return (
    <>
      <Container
        className="bg-image"
        style={{ backgroundImage: `url(${LoginHeroImage})` }}
      >
        {/* todo proper error bar  */}
        {enteredInvalidPassword && <p>Invalid Password</p>}
        {loading && <LoadingSpinner />}
        {renderBody(executeLogin)}
      </Container>
    </>
  );
};

export default LoginView;
