import { useState } from 'react'
import NavbarComponent from './navbar/NavbarComponent'
import { Col, Container, Row, Button } from 'react-bootstrap'
import runChat from '../configs/gemini'
import '../App.css'

const MoodyChatComponent = () => {
  const [userText, setUserText] = useState("");
  const [messages, setMessages] = useState<{ type: "user" | "ai"; text: string }[]>([]);
  const [isFirstSubmission, setIsFirstSubmission] = useState(true);

  const HandleSubmit = async () => {
    if (!userText.trim()) return;
    let response = await runChat(userText);
  
    // Split AI response into individual lines based on line breaks
    const responseLines = response.split("\n").filter((line) => line.trim());
  
    // Update the state with properly typed objects
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: userText }, // User message
      ...responseLines.map((line): { type: "ai"; text: string } => ({ type: "ai", text: line })), // AI response lines
    ]);
  
    setUserText("");
    setIsFirstSubmission(false);
  }

  return (
    <div className="chat-container">
      <NavbarComponent />
      <Container fluid className={isFirstSubmission ? "" : "chat-message mb-4"}>
        {/* Render messages */}
        {messages.length > 0 &&
          messages.map((message, idx) => (
            <Row key={idx} className="mb-1 px-lg-5 ">
              <Col
                className={
                  message.type === "user" ? "text-end" : "text-start"
                }
              >
                <p className={`message ${message.type === "ai" ? "ai-message" : "user-message"}`}>
                  {message.text}
                </p>
              </Col>
            </Row>
          ))}
      </Container>
      <Container fluid className={isFirstSubmission ? 'fullscreen-center' : 'chat-input'}>
        <Row className="text-center">
          <Col className={isFirstSubmission ? '' : 'd-flex justify-content-center align-items-center'} xs={12}>
            {isFirstSubmission && <h2 className="mb-4">How are you feeling?</h2>}
            <input
              type="text"
              placeholder="Type your feelings..."
              className="text-input"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
            />
            <Button className='submit-style' onClick={HandleSubmit}>submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MoodyChatComponent
