export function generateCalendarDays(year, month) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = []
    let start = daysInPrevMonth - firstDay + 1
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    for (let i = start; i <= daysInPrevMonth; i++) {
        days.push({
            day: i,
            month: prevMonth,
            year: prevYear,
            isCurrentMonth: false
        })
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            month: month,
            year: year,
            isCurrentMonth: true
        })
    }
    const remaining = 42 - days.length
    for (let i = 1; i <= remaining; i++) {
        days.push({
            day: i,
            month: nextMonth,
            year: nextYear,
            isCurrentMonth: false
        })
    }
    return days;
} 
