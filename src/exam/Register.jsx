import { useState } from "react";

function Register() {

  const [event, setEvent] = useState({
    eventName: "",
    description:"",
    count:"",
    location:"",
    date:"",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let events = JSON.parse(localStorage.getItem("events")) || [];

    events.push(event);

    localStorage.setItem("events", JSON.stringify(events));

    alert("Event Registered Successfully!");

    setEvent({

    eventName: "",
    description:"",
    count:"",
    location:"",
    date:"",

    });
  };

  return (
    <div>
      <h2>Event Registration</h2>
      <div > 
      <form onSubmit={handleSubmit}>
        <label>Event name</label>
        <input type="text"  name="eventName"placeholder="Event Name" value={event.eventName} onChange={handleChange} required  />
        <br />
        <label>Description</label>
        <input type="text" name="description" placeholder="Description" value={event.description} onChange={handleChange} required/>
        <br />
        <label htmlFor="count">Head Count</label>
        <input type="text" name="count" placeholder="Enter Head Count" value={event.count}  onChange={handleChange} required   />
        <br />
        <label htmlFor="location">Location</label>
        <input type="text" name="location" placeholder="Location of the event" value={event.location} onChange={handleChange} required/>
        <br/>
        <label htmlFor="date">Date of the Event</label>
        <input type="date" name="date" value={event.date} onChange={handleChange} required />
        <button type="submit" >Register</button>

      </form>
      </div>
    </div>
  );
}

export default Register;