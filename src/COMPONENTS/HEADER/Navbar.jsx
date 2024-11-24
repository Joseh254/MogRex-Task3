import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff" }}>
    <h1 style={{ display: "inline" }}>HealthConnect</h1>
    <ul style={{ display: "inline", float: "right", listStyleType: "none", margin: 0 }}>
      <li style={{ display: "inline", margin: "0 10px", cursor: "pointer" }}>Home</li>
      <li style={{ display: "inline", margin: "0 10px", cursor: "pointer" }}>Doctors</li>
      <li style={{ display: "inline", margin: "0 10px", cursor: "pointer" }}>Profile</li>
    </ul>
  </nav>
  )
}

export default Navbar