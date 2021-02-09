import React from 'react';
import { scroller } from 'react-scroll';

// components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Mynavbar.style.css';

// *********Navbar**********
const Mynavbar = () => {
  return (
    <>
      <Navbar className="fixed-top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {/* ******my logo******** */}
          <img
            className="logo"
            src={process.env.PUBLIC_URL + '/Image/logo.png'}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              // scroll
              onClick={() =>
                scroller.scrollTo('home', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })
              }
              className="menu-item"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('aboutme', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })
              }
              className="menu-item"
              href="#aboutme"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('skill', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })
              }
              className="menu-item"
              href="#skill"
            >
              skill
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('experience', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })
              }
              className="menu-item"
              href="#Exprence"
            >
              Exprence
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('project', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })
              }
              className="menu-item"
              href="#Project"
            >
              Project
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('contact', {
                  smooth: true,
                  offset: -70,
                  duration: 500,
                })
              }
              className="menu-item"
              href="#Contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Mynavbar;
