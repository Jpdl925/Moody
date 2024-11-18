import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import calendarLogo from "../../assets/calendar.png";
import { Col, Nav, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar className="bg-lightblue">
      <Container fluid className="p-0 m-0 w-100">
        <Row className="align-items-center w-100">
          <Col />
          <Col className="d-flex justify-content-center">
            <Navbar.Brand
              as={Link} to="/"
              className="logo d-flex align-items-center"
              style={{ gap: "10px" }}
            >
              <img src={calendarLogo} alt="Moody Logo" width={45} height={45} />
              MOODY
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end">
            <Nav className="p-0 my-0 ms-0 me-4 routes">
              <Nav.Link as={Link} to="/Calendar" className="p-0 m-0">
                Moody Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/AI" className="p-0 m-0">
                Moody.ai
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
