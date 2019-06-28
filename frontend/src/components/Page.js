import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MenuBar from './MenuBar';
import Router from './Router';

const Page = () => {

  return (
    <>
      <MenuBar />
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Router />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Page;
