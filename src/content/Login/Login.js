import React from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <Grid fullWidth className="loginContainer">
      <Row>
        <Column lg={3}>
          <div style={{ marginBottom: '2rem' }}>
            <h3>Login to Sankofa Healthcare Framework</h3>
            <p>
              Don't have an account? <a href="/#/login">Create an account</a>
            </p>
          </div>

          <LoginForm />
        </Column>
        <Column md={3} lg={8}>
          {/* <p>Span 25%</p> */}
        </Column>
      </Row>
    </Grid>
  );
};

export default Login;
