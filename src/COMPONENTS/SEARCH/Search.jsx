import React from 'react'
import { useState } from 'react';
import './Search.css'
function Search() {
    const doctorsList = [
        {Name:"Dr. Victory Njeri",Age:"50Years",AreaOfSpecialization:"Surgery"},
        {Name:"Dr. Joseph Mbugua",Age:"50Years",AreaOfSpecialization:"Surgery"},
        {Name:"Dr. William Ruto",Age:"50Years",AreaOfSpecialization:"Surgery"},
        {Name:"Dr. Stephen Wainaina",Age:"50Years",AreaOfSpecialization:"Surgery"},
        {Name:"Dr. Ronald Trump",Age:"50Years",AreaOfSpecialization:"Surgery"}
      ];

        const [query, setQuery] = useState("");
        const filteredDoctorsList = doctorsList.filter((doctor) =>
          doctor.Name.toLowerCase().includes(query.toLowerCase())
        );

        function handleChange(event){
          setQuery(event.target.value)
        }
  return (
    <section className='search-component'>
    <h2>Search for Doctors</h2>
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search for a doctor..."
    />
    <ul>
      {filteredDoctorsList.map((doctor, index) => (
        <li key={index} >
          {doctor.Name}
        </li>
      ))}
    </ul>
  </section>
  )
}

export default Search