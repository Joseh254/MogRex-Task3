import React, { useState } from "react";
import './Calender.css'
function Calender() {
const [selectedSlot, setSelectedSlot] = useState(null);
const availableSlots = [
    { date: "2024-12-01", time: "10:00 AM" },
    { date: "2024-12-01", time: "11:00 AM" },
    { date: "2024-12-02", time: "2:00 PM" },
  ];
 

  return (
    <section className="calender-component">
      <h2>Book An Appointments</h2>
      <ul>
        {availableSlots.map((slot, index) => (
          <li
            key={index}
            onClick={() => setSelectedSlot(slot)}
            style={{
              backgroundColor: selectedSlot === slot ? "#28a745" : "white",
              color: selectedSlot === slot ? "white" : "black",
            }}
          >
            {slot.date} at {slot.time}
          </li>
        ))}
      </ul>
      <button disabled={selectedSlot}> Book Appointment </button>
    </section>
  )
}

export default Calender