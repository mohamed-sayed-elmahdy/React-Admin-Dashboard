import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function CalenderHeader({ month, year, onNextMonth, onPrevMonth, setCurrentDate }) {
    return (
        <div className="flex justify-between items-center">
            <div className='flex flex-col items-start'>
               <span className='text-4xl font-bold text-primary'> {month} </span>
                <span className='text-lg text-gray-500'>
                    {year}
                </span>
            </div>
            <div className="flex items-center gap-4">
                <button className='cursor-pointer' onClick={onPrevMonth}><FaChevronLeft /></button>
                <button onClick={() => setCurrentDate(new Date())} className='px-6 cursor-pointer bg-primary text-white py-2 rounded-md'>Today</button>
                <button className='cursor-pointer' onClick={onNextMonth}><FaChevronRight /></button>
            </div>
        </div>
    )
}

export default CalenderHeader