import React, { useState } from 'react';
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const Signin = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
    email: '',
  });

  const saveToState = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={state}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signup, { error, loading }) => (
        <Form
          method="post"
          onSubmit={async e => {
            e.preventDefault();
            await signup();
            setState({ name: '', email: '', password: '' });
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <h2>Sign into your account</h2>
            <Error error={error} />
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={saveToState}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                value={state.password}
                onChange={saveToState}
              />
            </label>

            <button type="submit">Sign In!</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
}

export default Signin;
