import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Schedule() {
    const navigate = useNavigate();

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://meal-tracker--backend.herokuapp.com/schedule`);
      const resData = await response.json();
      setSchedule(resData);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        headerToolbar={{
          center: 'dayGridWeek,timeGridWeek,timeGridDay new',
        }}
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event'),
          },
        }}

        eventColor="red"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
}
export default Schedule;
