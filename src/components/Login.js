import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
} from "semantic-ui-react";
import Navbar from './Navbar';

import { AuthContext } from "./Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
      async event => {
        event.preventDefault();  
        const { email, password } = event.target.elements;
        try {
          const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            history.push("/admin");
      } catch (error) {
        alert(error);
      }
      },
      [history]
  );

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
        return <Redirect to="/" />;
  }

  return (
    <div>
    <Navbar />
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="orange" textAlign="center">
            Login to Dashboard
          </Header>
          <Form onSubmit={handleLogin} size="large">
            <Segment raised>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
            //     onChange={this.handleChange}
            //     value={email}
            //     className={this.handleInputError(errors, "email")}
                type="email"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
            //     onChange={this.handleChange}
            //     value={password}
            //     className={this.handleInputError(errors, "password")}
                type="password"
              />
     
              <Button 
            //     disabled={loading}
            //     className={loading ? "loading" : ""}
                color="orange"
                fluid
                size="large"
              >
                Submit
              </Button>
         
            </Segment>
          </Form>
          {/* {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )} */}
        </Grid.Column>
      </Grid>
      </div>
    );
  };
  
  export default withRouter(Login);
