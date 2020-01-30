import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Nav, Navbar, Container, Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import logoImage from '../assets/logoImage.jpg';

const Styles = styled.div`
  #logo{
    height: 40px;
    position: relative;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: black;
    }
  }
`;

export const NavigationBar = () => (
  <Styles className="bg-white">
    <Container>
      <Navbar expand="lg">
        <a href="/">
          <Image id="logo" src={logoImage} fluid></Image>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Row>
              <Col xs={12} md={9} className="align-self-center">
                <Form >
                  <Form.Control type="search" placeholder="Oque deseja procurar?"/>
                </Form>
              </Col>
              <Col xs={4} md={2} className="align-self-center">
                <Nav.Link>
                  <Image id="logo" href="/" src={logoImage} fluid></Image>
                  <Link />
                </Nav.Link>
              </Col>
              <Col xs={4} md={1} className="align-self-center">
                <Nav.Link>
                  <Image id="logo" href="/" src={logoImage} fluid></Image>
                  <Link to="/about"/>
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </Styles >
)
