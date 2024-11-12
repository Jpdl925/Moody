import { Container, Image, Nav, Navbar, Table } from "react-bootstrap"
import CalendarImage from '../../assets/Calendar.png';
import { Button } from "react-bootstrap";

const january = () => {
  return (
    <>
    <Navbar expand="lg" className="py-3 navColor">
      <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
        
        
        <Navbar.Brand href="#home" className="navTitle">
          <Image src={CalendarImage}/> MOODY
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="order-2 justify-content-end">
        <Nav className=" navLinks">
          <Nav.Link href="#calendar">Moody Calendar</Nav.Link>
          <Nav.Link href="#ai">Moody.ai</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container fluid>
    <Table >
      <thead>
        <tr className="text-center">
          <th><Button className="dayBTN">S</Button></th>
          <th><Button className="dayBTN">M</Button></th>
          <th><Button className="dayBTN">T</Button></th>
          <th><Button className="dayBTN">W</Button></th>
          <th><Button className="dayBTN">T</Button></th>
          <th><Button className="dayBTN">F</Button></th>
          <th><Button className="dayBTN">S</Button></th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td><Button className="dayBTN">1</Button></td>
          <td><Button className="dayBTN">2</Button></td>
          <td><Button className="dayBTN">3</Button></td>
          <td><Button className="dayBTN">4</Button></td>
          <td><Button className="dayBTN">5</Button></td>
          <td><Button className="dayBTN">6</Button></td>
          <td><Button className="dayBTN">7</Button></td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </>
  )
}

export default january