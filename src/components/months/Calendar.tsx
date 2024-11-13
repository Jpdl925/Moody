import React, { useState } from 'react';

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

    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
  
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
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} style={{ fontWeight: 'bold' }}>{day}</div>
        ))}

        {/* Fill in the empty days at the start */}
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {/* Render Days of the Month */}
        {days.map((day, index) => (
          <div key={index} style={{ padding: '10px' }}>
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  

    
    
    </>
  )
}

export default Calendar;