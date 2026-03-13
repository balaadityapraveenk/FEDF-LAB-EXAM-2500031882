import React, { useEffect, useState } from 'react'

export default function ViewEvents() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div>
      <h2>View Events</h2>

      {events.length === 0 ? (
        <p>No Events Found</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Head Count</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.eventName}</td>
                <td>{event.description}</td>
                <td>{event.count}</td>
                <td>{event.location}</td>
                <td>{event.date}</td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  )
}