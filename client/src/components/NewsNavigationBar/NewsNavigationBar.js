import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

// A wrapper component on bootstraps navbar component.
function NewsNavigationBar() {
  return (
    <Navbar
      data-testid="nav-bar"
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
      className="news-navbar"
    >
      <Container>
        <Navbar.Brand className="news-brand-link" href="#home">
          Sagaas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto pull-right">
            <Nav.Link className="news-links" href="#home">
              POLITICS
            </Nav.Link>
            <Nav.Link className="news-links" href="#features">
              SPORTS
            </Nav.Link>
            <Nav.Link className="news-links" href="#pricing">
              ENTERTAINMENT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default React.memo(NewsNavigationBar);
