import React from 'react'
import NavbarComponent from './navbar/NavbarComponent'
import { Col, Container, Row } from 'react-bootstrap'

const MoodyChatComponent = () => {
  return (
    <div>
      <NavbarComponent/>
      <Container fluid className="fullscreen-center">
        <Row className="text-center">
          <Col xs={12}>
            <h2 className="mb-4">How are you feeling?</h2>
            <input
              type="text"
              placeholder="Type your feelings..."
              className="text-input"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MoodyChatComponent
