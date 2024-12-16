import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import calendarLogo from "../../assets/calendar.png";
import logoutImg from "../../assets/logout.png";
import { Navbar, Container, Offcanvas, Nav, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  useEffect(() => {
    let userId = Number(localStorage.getItem("UserId"));
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("UserId");
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-lightblue">
      <Container fluid className="p-0 m-0 w-100">
        <Row className="d-flex d-lg-none align-items-center w-100">
          <Col xs={2} className="ms-3">
            <button
              className="btn btn-light"
              onClick={handleOffcanvasToggle}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </Col>
          <Col xs={8} className="text-center">
            <Navbar.Brand
              as={Link}
              to={isLoggedIn ? "/Calendar" : "/"}
              className="logo d-flex justify-content-center align-items-center"
              style={{ gap: "10px", fontSize: "30px", fontWeight: "500" }}
            >
              <img src={calendarLogo} alt="Moody Logo" width={30} height={30} />
              MOODY
            </Navbar.Brand>
          </Col>
        </Row>

        <Row className="d-none d-lg-flex align-items-center w-100">
          {isLoggedIn ? (
            <Col onClick={handleLogout}>
              <img src={logoutImg} alt="" width={45} className="ms-4" style={{cursor:'pointer'}} />
            </Col>
          ) : (
            <Col />
          )}

          <Col className="d-flex justify-content-center">
            <Navbar.Brand
              as={Link}
              to={isLoggedIn ? "/Calendar" : "/"}
              className="logo d-flex align-items-center"
              style={{ gap: "10px" }}
            >
              <img src={calendarLogo} alt="Moody Logo" width={45} height={45} />
              MOODY
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end">
            <Nav className="p-0 my-0 ms-0 me-4 routes">
              {isLoggedIn && (
                <Nav.Link as={Link} to="/Calendar" className="p-0 m-0">
                  Calendar
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link as={Link} to="/AI" className="p-0 m-0">
                  Moody.ai
                </Nav.Link>
              )}
            </Nav>
          </Col>
        </Row>

        {isLoggedIn && <Offcanvas
          show={showOffcanvas}
          onHide={closeOffcanvas}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Moody Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/Calendar" onClick={closeOffcanvas}>
                Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/AI" onClick={closeOffcanvas}>
                Moody.ai
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
