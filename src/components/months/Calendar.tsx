import React, { useState } from 'react';
import NavbarComponent from '../navbar/NavbarComponent';

//Helper function to get the days of the month
const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

// Calendar Component
const Calendar = () => {
        console.log("hello");
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    //Funtion to handle a date click
    const handleDateClick = (date:Date) => {
            alert(date);
    };
  
    // Change the month
    const changeMonth = (offset: number) => {
      let newMonth = currentMonth + offset;
      let newYear = currentYear;
  
      if (newMonth === 12) {
        newMonth = 0;
        newYear += 1;
      } else if (newMonth === -1) {
        newMonth = 11;
        newYear -= 1;
      }
  
      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    };
  
    const days = getDaysInMonth(currentYear, currentMonth);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  return (


    <>
    <NavbarComponent/>
     <div style={{ textAlign: 'center' }}>
      {/* Month and Year Header */}
      <header>
        <div className='container'>
            <div className="row">
                <div className="col">
                    <button onClick={() => changeMonth(-1)}>Previous</button>
                </div>
                <div className="col">
                <h2>
                    {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
                </h2>
                </div>
                    <div className="col">   <button onClick={() => changeMonth(1)}>Next</button> </div>
                </div>
        </div>
      </header>

      {/* Calendar Grid */}
      <div className="calendar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {/* Weekdays Header */}
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day} style={{ fontWeight: 'bold' }}>{day}</div>
        ))}

        {/* Fill in the empty days at the start */}
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {/* Render Days of the Month */}
        {days.map((day, index) => (
          <button 
                key={index} 
                onClick={() => handleDateClick(day)}
                // style={{ padding: '10px', width: '100%', borderRadius:'20%', border:'1px solid #ddd', cursor:'pointer'  }}>
                style={{ padding: '10px', height: '100%', width: '30%', borderRadius:'50%', border:'1px solid #ddd', display:'flex', alignItems:'center', justifyContent:'center',cursor:'pointer'  }}>
            {/* <button onClick={() => handleDateClick(day)} style={{width: '100%', padding:'8px'} }></button> */}
            {day.getDate()}
          </button>
        ))}
      </div>
    </div>
  

    
    
    </>
  )
}

export default Calendar;