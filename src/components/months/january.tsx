import { Container, Image, Nav, Navbar, Table } from "react-bootstrap";
import CalendarImage from "../../assets/Calendar.png";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useState } from "react";

const january = () => {


  const testfun = (e:any) => {
    console.log(e);
    
  }

  return (
    <>
      <Navbar expand="lg" className="py-3 navColor">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />

          <Navbar.Brand href="#home" className="navTitle">
            <Image src={CalendarImage} /> MOODY
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="order-2 justify-content-end"
          >
            <Nav className=" navLinks">
              <Nav.Link href="#calendar">Moody Calendar</Nav.Link>
              <Nav.Link href="#ai">Moody.ai</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Calendar 
        showNeighboringMonth={false} 
        // Onclickday can trigger module pop up
        
        />      
      </Container>
    </>
  );
};

export default january;
