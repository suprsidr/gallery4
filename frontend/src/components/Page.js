import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import MenuBar from './MenuBar';
import Router from './Router';

const client = new ApolloClient({
  uri: 'http://172.21.149.180:4444',
  request: operation => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include',
      },
    });
  },
});

const Page = () => {

  return (
    <ApolloProvider client={client}>
      <MenuBar />
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Router />
          </Col>
        </Row>
      </Container>
    </ApolloProvider>
  );
}

export default Page;
