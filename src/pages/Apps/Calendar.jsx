import CalenderHeader from '@/components/CalenderHeader';
import Calendardays from '@/components/Calendardays';

import { useState } from 'react';

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const month = MONTHS[currentDate.getMonth()]
  const year = currentDate.getFullYear()
  console.log(month, year, currentDate.getDate(), currentDate.getDay(), currentDate.getMonth())
  const getNextMonth = () => {
    setCurrentDate(prev =>
      new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const getPrevMonth = () => {
    setCurrentDate(prev =>
      new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <CalenderHeader
        month={month}
        year={year}
        setCurrentDate={setCurrentDate}
        onNextMonth={getNextMonth}
        onPrevMonth={getPrevMonth} />
      <div>
        <Calendardays
          month={currentDate.getMonth()}
          year={year}
        />
      </div>
    </div>
  )
}

export default Calendar;