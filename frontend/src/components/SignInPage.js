import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import RequestReset from './RequestReset';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignInPage = props => (
  <Columns>
    <Signup />
    <Signin />
    <RequestReset />
  </Columns>
);

export default SignInPage;
