import { useState, useRef } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const EVENT_COLORS = [
  { chip: "bg-rose-500", dot: "bg-rose-500", ring: "ring-rose-400" },
  { chip: "bg-cyan-500", dot: "bg-cyan-500", ring: "ring-cyan-400" },
  { chip: "bg-amber-400", dot: "bg-amber-400", ring: "ring-amber-300" },
  { chip: "bg-emerald-500", dot: "bg-emerald-500", ring: "ring-emerald-400" },
  { chip: "bg-violet-500", dot: "bg-violet-500", ring: "ring-violet-400" },
  { chip: "bg-orange-500", dot: "bg-orange-500", ring: "ring-orange-400" },
];

const TODAY = new Date();
let nextId = 10;

function pad(n) { return String(n).padStart(2, "0"); }
function toDateStr(y, m, d) { return `${y}-${pad(m + 1)}-${pad(d)}`; }
function getDaysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDay(y, m) { return new Date(y, m, 1).getDay(); }

const todayStr = toDateStr(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate());

function mkEvent(id, title, dayOffset, colorIdx) {
  const d = new Date(TODAY);
  d.setDate(d.getDate() + dayOffset);
  return { id, title, date: toDateStr(d.getFullYear(), d.getMonth(), d.getDate()), colorIdx };
}

const initialEvents = [
  mkEvent(1, "Team Standup", 0, 0),
  mkEvent(2, "Design Review", 2, 1),
  mkEvent(3, "Launch Party 🎉", 5, 2),
  mkEvent(4, "Client Call", -1, 3),
  mkEvent(5, "Sprint Planning", 3, 4),
];

export default function Calendar() {
  const [cur, setCur] = useState({ year: TODAY.getFullYear(), month: TODAY.getMonth() });
  const [events, setEvents] = useState(initialEvents);
  const [dragging, setDragging] = useState(null);
  const [dragOver, setDragOver] = useState(null);
  const [modal, setModal] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newColor, setNewColor] = useState(0);
  const inputRef = useRef();

  const { year, month } = cur;
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  function navigate(dir) {
    setCur(prev => {
      let m = prev.month + dir, y = prev.year;
      if (m < 0) { m = 11; y--; }
      if (m > 11) { m = 0; y++; }
      return { year: y, month: m };
    });
  }

  function onDragStart(e, ev) {
    setDragging(ev.id);
    e.dataTransfer.effectAllowed = "move";
  }
  function onDragOver(e, date) { e.preventDefault(); setDragOver(date); }
  function onDrop(e, date) {
    e.preventDefault();
    if (dragging !== null) setEvents(p => p.map(ev => ev.id === dragging ? { ...ev, date } : ev));
    setDragging(null); setDragOver(null);
  }
  function onDragEnd() { setDragging(null); setDragOver(null); }

  function openModal(date) {
    setModal(date); setNewTitle(""); setNewColor(Math.floor(Math.random() * EVENT_COLORS.length));
    setTimeout(() => inputRef.current?.focus(), 60);
  }
  function addEvent() {
    if (!newTitle.trim()) return;
    setEvents(p => [...p, { id: nextId++, title: newTitle.trim(), date: modal, colorIdx: newColor }]);
    setModal(null);
  }
  function deleteEvent(e, id) { e.stopPropagation(); setEvents(p => p.filter(ev => ev.id !== id)); }

  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .display-font { font-family: 'Fraunces', serif; }
        .event-chip:hover .del-btn { opacity: 1 !important; }
        .event-chip { transition: transform 0.12s, filter 0.12s; }
        .event-chip:hover { transform: translateY(-1px); filter: brightness(1.15); }
        .day-cell:hover { background: rgba(255,255,255,0.04) !important; }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes popIn { from { opacity:0; transform:scale(0.9) translateY(8px) } to { opacity:1; transform:scale(1) translateY(0) } }
        .modal-fade { animation: fadeIn 0.15s ease; }
        .modal-pop { animation: popIn 0.2s cubic-bezier(0.34,1.56,0.64,1); }
      `}</style>

      <div className="w-full bg-white/[0.03] border border-white/[0.07] rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-7 border-b border-white/[0.06]">
          <div>
            <h1 className="display-font text-5xl font-semibold text-slate-100 tracking-tight leading-none">
              {MONTHS[month]}
            </h1>
            <p className="text-slate-600 text-xs tracking-widest mt-1.5 font-light uppercase">{year}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/[0.08] transition-all active:scale-95 text-lg">
              ←
            </button>
            <button onClick={() => setCur({ year: TODAY.getFullYear(), month: TODAY.getMonth() })}
              className="px-4 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/[0.08] transition-all text-xs font-medium tracking-widest">
              TODAY
            </button>
            <button onClick={() => navigate(1)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/[0.08] transition-all active:scale-95 text-lg">
              →
            </button>
          </div>
        </div>

        {/* Day Labels */}
        <div className="grid grid-cols-7 px-4 pt-4">
          {DAYS.map(d => (
            <div key={d} className="text-center text-xs font-semibold text-slate-600 tracking-widest uppercase py-2">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="px-4 pb-4 flex flex-col gap-1">
          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-1">
              {week.map((day, di) => {
                const dateStr = day ? toDateStr(year, month, day) : null;
                const isToday = dateStr === todayStr;
                const isTarget = dragOver === dateStr;
                const dayEvs = day ? events.filter(e => e.date === dateStr) : [];

                return (
                  <div
                    key={di}
                    className={[
                      "day-cell min-h-24 rounded-xl p-2 overflow-hidden transition-colors",
                      day ? "cursor-pointer" : "pointer-events-none",
                      isTarget
                        ? "bg-violet-500/10 border border-dashed border-violet-400/50"
                        : "border border-transparent",
                    ].join(" ")}
                    onDragOver={day ? e => onDragOver(e, dateStr) : undefined}
                    onDrop={day ? e => onDrop(e, dateStr) : undefined}
                    onDragLeave={() => setDragOver(null)}
                    onClick={day ? () => openModal(dateStr) : undefined}
                  >
                    {day && (
                      <>
                        <div className={[
                          "w-7 h-7 flex items-center justify-center rounded-full text-sm mb-1.5",
                          isToday
                            ? "bg-violet-500 text-white font-bold"
                            : "text-slate-500 font-medium",
                        ].join(" ")}>
                          {day}
                        </div>

                        <div className="flex flex-col gap-0.5">
                          {dayEvs.slice(0, 3).map(ev => {
                            const c = EVENT_COLORS[ev.colorIdx % EVENT_COLORS.length];
                            return (
                              <div
                                key={ev.id}
                                className={`event-chip flex items-center gap-1 ${c.chip} rounded-md px-1.5 py-0.5 cursor-grab active:cursor-grabbing`}
                                draggable
                                onDragStart={e => { e.stopPropagation(); onDragStart(e, ev); }}
                                onDragEnd={onDragEnd}
                                onClick={e => e.stopPropagation()}
                                style={{ opacity: dragging === ev.id ? 0.3 : 1 }}
                              >
                                <span className="text-white text-xs font-semibold truncate flex-1 leading-tight drop-shadow-sm" style={{fontSize: 10}}>
                                  {ev.title}
                                </span>
                                <span
                                  className="del-btn text-white/70 hover:text-white text-xs leading-none cursor-pointer flex-shrink-0"
                                  style={{ opacity: 0 }}
                                  onClick={e => deleteEvent(e, ev.id)}
                                >×</span>
                              </div>
                            );
                          })}
                          {dayEvs.length > 3 && (
                            <p className="text-slate-600 pl-1 font-medium" style={{fontSize: 9}}>+{dayEvs.length - 3} more</p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 px-8 py-3 border-t border-white/[0.05]">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
          <p className="text-slate-700 font-light tracking-wide" style={{fontSize: 11}}>
            Click any day to add an event · Drag events to reschedule
          </p>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="modal-fade fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setModal(null)}
        >
          <div
            className="modal-pop bg-slate-900 border border-white/10 rounded-2xl p-7 w-80 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-slate-600 tracking-widest uppercase mb-1" style={{fontSize: 10}}>{modal}</p>
            <h2 className="display-font text-3xl text-slate-100 mb-5">New Event</h2>

            <input
              ref={inputRef}
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addEvent()}
              placeholder="What's happening?"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all mb-4"
            />

            <div className="flex gap-2.5 mb-6">
              {EVENT_COLORS.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setNewColor(i)}
                  className={`w-6 h-6 rounded-full ${c.dot} transition-all hover:scale-110 ${newColor === i ? `ring-2 ring-offset-2 ring-offset-slate-900 ${c.ring}` : ""}`}
                />
              ))}
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setModal(null)}
                className="px-4 py-2 rounded-xl border border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20 transition-all text-sm"
              >Cancel</button>
              <button
                onClick={addEvent}
                className={`px-5 py-2 rounded-xl text-white text-sm font-semibold shadow-lg transition-all hover:brightness-110 active:scale-95 ${EVENT_COLORS[newColor].chip}`}
              >Add Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}