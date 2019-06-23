import React from 'react';
import { useRoutes, A } from 'hookrouter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Albums from './Albums';
import Album from './Album';
import NotFound from './NotFound';
import MenuBar from './MenuBar';

const routes = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
  '/albums': () => <Albums />,
  '/album/:id': ({ id }) => <Album id={id} />
};

const Page = () => {
  const routeResult = useRoutes(routes);

  return (
    <>
      <MenuBar />
      <Container fluid>
        <Row>
          <Col xs={12}>
            {routeResult || <NotFound />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Page;