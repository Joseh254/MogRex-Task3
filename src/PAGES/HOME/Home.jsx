import React from 'react'
import { useState } from 'react';
import './Home.css'
function Home() {
  const SelectedDate = new Date().toISOString().split("T")[0];
  const[ date,setDate] = useState(SelectedDate)
 const[time,setTime] = useState(null)

 function hadleReschedule(){

 }
  const appointments = [
    { id: 1, doctorName: "Dr. Joseph Mbugua", date: <input type="date" defaultValue={SelectedDate}  disabled/>, time: "" },
    { id: 1, doctorName: "Dr. Emmah Mbugua", date: <input type="date" defaultValue={SelectedDate}  disabled/>, time: "" },
  ];

  return (
    <section className='home-component'>
    <h2>Upcoming Appointments</h2>
    <ul>
      {appointments.map((currentAppointment) => (
        <li
          key={currentAppointment.id}>
          <div>
            <strong>{currentAppointment.doctorName}</strong>
            <p>
              {currentAppointment.date} at {currentAppointment.time}
            </p>
          </div>
          <button>
            Reschedule
          </button>
        </li>
      ))}
    </ul>
  </section>
  )
}

export default Home