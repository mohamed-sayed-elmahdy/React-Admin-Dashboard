    import { generateCalendarDays } from '@/utils/generateCalendarDays';
export default function Calendardays({ month, year }) {
  const days = generateCalendarDays(year, month);
  const today = new Date();

  return (
    <div className="grid grid-cols-7 gap-2 mt-4 pt-4 border-t-2 border-primary/20">
      {days.map((day) => {
        const isToday =
          day.day === today.getDate() &&
          day.month === today.getMonth() &&
          day.year === today.getFullYear();

        return (
          <div
            key={`${day.year}-${day.month}-${day.day}`}
            className={`
              border-t-4 w-full h-20 flex items-center justify-center rounded-md
              cursor-pointer transition
              ${day.isCurrentMonth
                ? 'bg-primary/70 text-white/60'
                : 'text-gray-400 bg-gray-100'}

              ${isToday ? 'bg-primary! border-2 border-primary/80 text-white' : ''}
            `}
          >
            {day.day}
          </div>
        );
      })}
    </div>
  );
}