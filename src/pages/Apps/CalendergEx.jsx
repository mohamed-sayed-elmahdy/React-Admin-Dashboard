import CalenderHeader from '@/components/CalenderHeader';
import { useState } from 'react';



const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function CalendergEx() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const month = MONTHS[currentDate.getMonth()]
    const year = currentDate.getFullYear()
    console.log(month, year, currentDate.getDate(), currentDate.getDay(), currentDate.getMonth())
    const getNextMonth = () => {
        setCurrentDate(new Date(year, currentDate.getMonth() + 1))
    }
    const getPrevMonth = () => {
        setCurrentDate(new Date(year, currentDate.getMonth() - 1))
    }
  return (
    <div>
        <CalenderHeader 
        month={month}
        year={year}
        setCurrentDate={setCurrentDate}
        onNextMonth={getNextMonth} 
        onPrevMonth={getPrevMonth} />
        <div>
        
        </div>
    </div>
  )
}

export default CalendergEx