import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { navigate } from 'hookrouter';



const MenuBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Gallery 4</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
          <Nav.Link onClick={() => navigate('/albums')}>Albums</Nav.Link>
          <NavDropdown title="New" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => navigate('/albums')}>Album</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/categories')}>Category</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => navigate('/admin')}>Admin</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MenuBar;
