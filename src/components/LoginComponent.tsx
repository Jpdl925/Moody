import React, { useState } from "react";
import NavbarComponent from "./navbar/NavbarComponent";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../App.css";
import CarouselComponent from "./CarouselComponent";

const LoginComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <NavbarComponent />
      <Container
        fluid
        className="h-100 d-flex align-items-center justify-content-center p-0"
        style={{ minHeight: "100vh", overflow: "hidden" }}
      >
        <Row className="w-100 h-100">
          <Col
            xs={12}
            md={6}
            className="form-style d-flex flex-column align-items-center"
          >
            <Row className="mb-3" style={{ width: "65%" }}>
              <Col>
                {isLogin && <h1 style={{ fontSize: '50px' }}>LOGIN</h1>}
                {!isLogin && <h1 className="text-center" style={{ fontSize: '50px' }}>Create an Account</h1>}

              </Col>
            </Row>
            <Form style={{ width: "65%" }}>
              <Form.Group controlId="username" className="my-4">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className="p-3 input-style"
                />
              </Form.Group>

              <Form.Group controlId="password" className="my-4">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="p-3 input-style"
                />
              </Form.Group>

              <div className="text-center mt-3 d-flex flex-column align-items-center">
                <Button type="submit" className="justify-content-center" style={{ width: '20%' }}>
                  Submit
                </Button>
                <button
                  onClick={(e) => changeForm(e)}
                  style={{ textDecoration: "underline", border: '0', backgroundColor: 'transparent', marginTop: '10px' }}
                >
                  {isLogin ? "Don’t have an account?" : "Already have an account?"}
                </button>
              </div>

            </Form>
          </Col>

          {isLogin && (
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center p-0"
            >
              <div
                style={{ width: "100%", height: "100vh", overflow: "hidden" }}
              >
                <CarouselComponent />
              </div>
            </Col>
          )}
          {!isLogin && (
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-start justify-content-center text-center p-4"
            >
              <h2 className="w-100" style={{ fontSize: "40px" }}>About Moody</h2>
              <p style={{ fontSize: "25px", padding: '20px' }}>Welcome to Moody, your personal companion for emotional well-being. We believe that understanding your feelings is key to personal growth, and we built Moody to help you do just that.
                Moody.ai is here to listen whenever you need to talk. With just a click, you can log your emotions on the calendar, track how you feel over time, and gain insights into your moods. Whether you're feeling great or having a tough day, Moody is always here to help you reflect and grow.
                Our mission is to provide a simple, supportive space for you to explore your emotions. By combining AI and personal journaling, we aim to make emotional wellness accessible and engaging for everyone.
                Start your journey with Moody today—your emotions matter, and we're here for every step of your journey.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default LoginComponent;
