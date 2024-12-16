import React, { useState } from "react";
import NavbarComponent from "./navbar/NavbarComponent";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../App.css";
import Image from "../assets/login-image.jpg";
import CarouselComponent from "./CarouselComponent";
import { Login, Register } from "../utils/DataServices";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../utils/Interfaces";
import { z } from "zod";

const LoginComponent = () => {
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [id, setId] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
  });

  const formSchema = z.object({
    username: z.
    string()
    .nonempty("Username is required.")
    .min(4, "Username must be at least 4 characters long")
    ,
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long."),
  });

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    setErrorMessage("");
    setValidationErrors({ username: "", password: "" });
  };

  const validateForm = () => {
    try {
      formSchema.parse({ username, password });
      setValidationErrors({ username: "", password: "" });
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: { username: string; password: string } = {
          username: "",
          password: "",
        };
        err.errors.forEach((error) => {
          if (error.path[0] === "username") {
            errors.username = error.message;
          } else if (error.path[0] === "password") {
            errors.password = error.message;
          }
        });
        setValidationErrors(errors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    if (isLogin) {
      let loginInfo = {
        username: username,
        password: password,
      };

      try {
        let token = await Login(loginInfo);
        if (token && token.token) {
          localStorage.setItem("Token", token.token);
          localStorage.setItem("UserId", token.userId);
          navigate("/calendar");
        } else {
          setErrorMessage("Invalid login credentials. Please try again.");
        }
      } catch (error) {
        setErrorMessage(
          "Login failed. Please check your network and try again."
        );
      } finally {
        setLoading(false);
      }
    } else {
      let registerInfo = {
        id: id,
        userName: username,
        password: password,
      };

      try {
        let isUserCreated = await Register(registerInfo);
        if (isUserCreated) {
          alert("Account Successfully Created");
          setIsLogin(true);
        } else {
          setErrorMessage("Registration failed. Please try again.");
        }
      } catch (error) {
        setErrorMessage(
          "Registering account failed. Please check your network and try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <NavbarComponent />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center p-0 container-height"
        style={{ overflow: "hidden", height: "100vh" }}
      >
        <Row className="w-100 h-100">
          <Col
            xs={12}
            lg={6}
            className="form-style d-flex flex-column align-items-center"
            style={{ height: "100vh" }}
          >
            <img
              src={Image}
              alt="Responsive Image"
              className="d-lg-none py-4"
              style={{
                width: "100%",
                maxWidth: "85vw",
                height: "auto",
              }}
            />
            <Row className="mb-3" style={{ width: "65%" }}>
              <Col>
                <h1 className="login-title">
                  {isLogin ? "LOGIN" : "Create an Account"}
                </h1>
              </Col>
            </Row>
            <Form onSubmit={handleSubmit} className="form-container">
              <Form.Group controlId="username" className="my-4">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className="p-3 input-style"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isInvalid={!!validationErrors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {validationErrors.username}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="password" className="my-4">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="p-3 input-style"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!validationErrors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {validationErrors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center mt-3 d-flex flex-column align-items-center">
                <Button
                  type="submit"
                  className="justify-content-center"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
                <button
                  onClick={(e) => changeForm(e)}
                  style={{
                    textDecoration: "underline",
                    border: "0",
                    backgroundColor: "transparent",
                    marginTop: "10px",
                    color: "black"
                  }}
                >
                  {isLogin
                    ? "Don’t have an account?"
                    : "Already have an account?"}
                </button>
              </div>
              {errorMessage && (
                <p className="text-danger mt-3 text-center">{errorMessage}</p>
              )}
            </Form>
          </Col>

          {isLogin && (
            <Col
              lg={6}
              className="d-none d-lg-flex align-items-stretch justify-content-center p-0"
            >
              <CarouselComponent />
            </Col>
          )}
          {!isLogin && (
            <Col
              xs={12}
              lg={6}
              className="d-flex flex-column align-items-start justify-content-center text-center p-4"
            >
              <h2 className="w-100" style={{ fontSize: "40px" }}>
                About Moody
              </h2>
              <p className="about-style">
                Welcome to Moody, your personal companion for emotional
                well-being. We believe that understanding your feelings is key
                to personal growth, and we built Moody to help you do just that.
                Moody.ai is here to listen whenever you need to talk. With just
                a click, you can log your emotions on the calendar, track how
                you feel over time, and gain insights into your moods. Whether
                you're feeling great or having a tough day, Moody is always here
                to help you reflect and grow. Our mission is to provide a
                simple, supportive space for you to explore your emotions. By
                combining AI and personal journaling, we aim to make emotional
                wellness accessible and engaging for everyone. Start your
                journey with Moody today—your emotions matter, and we're here
                for every step of your journey.
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default LoginComponent;
