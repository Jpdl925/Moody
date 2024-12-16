import { Container, Modal, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import "./calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateCalendarDay, GetCalendarDays, UpdateDay } from "../../utils/DataServices";
import { ICalendarDay } from "../../utils/Interfaces";

const january = () => {


  const [show, setShow] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<ICalendarDay>({
    id: 0,
    mood: "",
    comment: "",
    date: new Date(),
    userId: Number(localStorage.getItem("UserId")),
  });
  const [_comment, setComment] = useState<string>('');  // eslint-disable-line no-unused-vars
  const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>([]);
  useEffect(() => {
    let userId = localStorage.getItem("UserId");

    const fetchData = async () => {
      try {
        const days = await GetCalendarDays(Number(userId));
        days.forEach(day => {
          let date = new Date(day.date);
          date.setHours(0, 0, 0, 0)
          day.date = date
        })
        setCalendarDays(days);

      } catch (error) {
        console.log("theres no user id in local storage")
      }
    }
    fetchData();
  }, [])

  // Functions to handle modal
  const handleClose = () => setShow(false);
  const handleShow = (date: Date) => {

    const existingData = calendarDays.find(day => day.date.toString() == date.toString())
    if (existingData) {
      setSelectedDay(existingData);
    }
    else {
      setSelectedDay({
        id: 0,
        mood: "",
        comment: "",
        date: new Date(date),
        userId: Number(localStorage.getItem("UserId")),
      });
    }
    setSelectedMood(selectedDay?.mood ?? "");
    setComment(selectedDay?.comment ?? "");
    setShow(true);
  };

  // function to select mood
  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setSelectedDay({
      ...selectedDay,
      mood: mood,
    });

  };

  // on submit, updates the mood for the date that is selected
  const handleSubmit = async () => {

    if (selectedDay) {
      let newCalendarDayInfo: ICalendarDay = selectedDay;
      newCalendarDayInfo.mood = selectedMood;
      try {
        await CreateCalendarDay(newCalendarDayInfo);

      } catch (error) {
        console.log("unable to create mood day")
      } finally {
        const days = await GetCalendarDays(Number(localStorage.getItem("UserId")));
        days.forEach(day => {
          let date = new Date(day.date);
          date.setHours(0, 0, 0, 0)
          day.date = date
        })
        setCalendarDays(days);
      }
    }
    setSelectedMood('');
    setComment('');
    handleClose();
  };
  const handleUpdate = async () => {

    if (selectedDay) {
      let newCalendarDayInfo: ICalendarDay = selectedDay;
      newCalendarDayInfo.mood = selectedDay.mood == "" ? selectedMood : selectedDay.mood;
      try {
        await UpdateDay(newCalendarDayInfo);

      } catch (error) {
        console.log("unable to create mood day")
      } finally {
        const days = await GetCalendarDays(Number(localStorage.getItem("UserId")));
        days.forEach(day => {
          let date = new Date(day.date);
          date.setHours(0, 0, 0, 0)
          day.date = date
        })
        setCalendarDays(days);
      }
    }
    setSelectedMood('');
    setComment('');
    handleClose();
  };

  // function that returns the styling of the mood texts and when selected, it highlights it
  const getMoodStyle = (mood: string) => {
    return {
      color: mood === 'Horrible' ? '#15153f' :
        mood === 'Bad' ? 'maroon' :
          mood === 'No Complaints' ? 'palevioletred' :
            mood === 'Good' ? 'yellowgreen' : 'yellow',
      backgroundColor: selectedDay.mood === mood ? 'lightgrey' : 'transparent',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '0 5px',
    };
  };

  const getTileClassName = ({ date }: { date: Date; }) => {
    let foundDate = calendarDays.find(day => day.date.toString() == date.toString())
    if (foundDate?.mood === 'Horrible') return 'horrible-tile';
    if (foundDate?.mood === 'Bad') return 'bad-tile';
    if (foundDate?.mood === 'No Complaints') return 'no-complaints-tile';
    if (foundDate?.mood === 'Good') return 'good-tile';
    if (foundDate?.mood === 'Amazing') return 'amazing-tile';
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
          tileClassName={({ date }) => getTileClassName({ date })}
          // Grabs only first letter of day for text at top
          formatShortWeekday={(_locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
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
              value={selectedDay?.comment ?? ""}
              onChange={(e) => {
                setSelectedDay({
                  ...selectedDay,
                  comment: e.target.value,
                });
              }
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            calendarDays.find(day => day.date.toString() == selectedDay.date.toString()) != undefined ? 
            
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
            :
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default january;
