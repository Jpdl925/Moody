

import { Container, Modal, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useState } from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import "./calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const January = () => {

  const [show, setShow] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [comment, setComment] = useState<string>('');

  // Need to store a mood given the date
  // This is like key value pairs
  const [moodData, setMoodData] = useState<Map<string, string>>(new Map());

  // Functions to handle modal
  const handleClose = () => setShow(false);
  const handleShow = (date: Date) => {
    setSelectedDate(date);
    setShow(true);
  };

  // function to select mood
  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  // on submit, updates the mood for the date that is selected
  const handleSubmit = () => {
    if (selectedDate) {
      // takes the previous mood and updates it to the new one from a certain day
      setMoodData((prevMoodData) => new Map(prevMoodData.set(selectedDate.toDateString(), selectedMood)));
    }
    setSelectedMood('');
    setComment('');
    handleClose();
  };

  // function that returns the styling of the mood texts and when selected, it highlights it
  const getMoodStyle = (mood: string) => {
    return {
      color: mood === 'Horrible' ? 'red' :
             mood === 'Bad' ? 'orange' :
             mood === 'No Complaints' ? 'black' :
             mood === 'Good' ? 'green' : 'lime',
      backgroundColor: selectedMood === mood ? 'lightgrey' : 'transparent',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '0 5px',
    };
  };

  // changes the background of the date's tile once a mood is picked
  const getTileClassName = ({ date, view }: { date: Date; view: 'month' | 'year' | 'decade' | 'century' }) => {
    if (view === 'month') {
      const mood = moodData.get(date.toDateString());
      if (mood === 'Horrible') return 'horrible-tile';
      if (mood === 'Bad') return 'bad-tile';
      if (mood === 'No Complaints') return 'no-complaints-tile';
      if (mood === 'Good') return 'good-tile';
      if (mood === 'Amazing') return 'amazing-tile';
    }
    return '';
  };

  return (
    <>
    <NavbarComponent />
    <Container fluid>
      <Calendar
        showNeighboringMonth={false}
        calendarType="gregory"
        nextLabel=">"
        prevLabel="<"
        onClickDay={(date) => handleShow(date)}
        tileClassName={({ date, view }) => getTileClassName({ date, view })}
      />
    </Container>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>How’s your mood today?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={getMoodStyle('Horrible')} onClick={() => handleMoodSelect('Horrible')}>Horrible</span>
          <span style={getMoodStyle('Bad')} onClick={() => handleMoodSelect('Bad')}>Bad</span>
          <span style={getMoodStyle('No Complaints')} onClick={() => handleMoodSelect('No Complaints')}>No Complaints</span>
          <span style={getMoodStyle('Good')} onClick={() => handleMoodSelect('Good')}>Good</span>
          <span style={getMoodStyle('Amazing')} onClick={() => handleMoodSelect('Amazing')}>Amazing</span>
        </div>
        <div className="mt-3">
          <label>Let's talk about it..</label>
          <textarea
            className="form-control mt-2"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
};

export default January;





