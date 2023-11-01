import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container className="navbar bg-dark border-body" data-bs-theme="dark">
        <Navbar.Brand href="#home">Happy Cake 🍰</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav data-bs-theme="dark">
            <Link
              to={{
                pathname: "/",
              }}
            >
              🏠Home
            </Link>
            <Link
              to={{
                pathname: "/Contacto",
              }}
            >
              📔Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
