import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" data-bs-theme="dark" >
            <Container>
              <Navbar.Brand href="#home">Header</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
              </Navbar.Collapse>
            </Container>
          </Navbar>
         
        );
    }
}

export default Header;