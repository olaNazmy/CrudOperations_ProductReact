import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function MyNavbar() 
{
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className={({isActive})=>isActive ? 'text-danger nav-link':'nav-link' } to="/home">Home</NavLink>
                <NavLink className={({isActive})=>isActive ? 'text-danger nav-link':'nav-link'} to="/products">Products</NavLink>
                <NavLink  className={({isActive})=>isActive ? 'text-danger nav-link':'nav-link'} to="/login">Login</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
