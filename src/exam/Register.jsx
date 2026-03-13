import { useState } from "react";

export default function Register() {

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
    <div style={{width:"350px", margin:"50px auto", padding:"20px", border:"1px solid black", borderRadius:"5px"}}>

      <h2 style={{textAlign:"center"}}>Event Registration</h2>

      <form onSubmit={handleSubmit}>

        <div style={{marginBottom:"10px"}}>
          <label >Event name</label><br/>
          <input
            style={{width:"100%", padding:"6px"}}
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={event.eventName}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{marginBottom:"10px"}}>
          <label>Description</label><br/>
          <input
            style={{width:"100%", padding:"6px"}}
            type="text"
            name="description"
            placeholder="Description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{marginBottom:"10px"}}>
          <label>Head Count</label><br/>
          <input
            style={{width:"100%", padding:"6px"}}
            type="number"
            name="count"
            placeholder="Enter Head Count"
            value={event.count}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{marginBottom:"10px"}}>
          <label>Location</label><br/>
          <input
            style={{width:"100%", padding:"6px"}}
            type="text"
            name="location"
            placeholder="Location"
            value={event.location}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{marginBottom:"10px"}}>
          <label>Date</label><br/>
          <input
            style={{width:"100%", padding:"6px"}}
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          style={{width:"100%", padding:"8px", background:"blue", color:"white", border:"none", borderRadius:"4px"}}
        >
          Register
        </button>

      </form>
    </div>
  );
}