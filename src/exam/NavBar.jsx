import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
       <nav style={{
  backgroundColor: "darkblue",
  color: "white",
  padding: "15px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
}}>
        <Link style={{color:"white"}} to ="/">Homepage</Link>
        <Link style={{color:"white"}} to ="/register">Add Event</Link>
        <Link style={{color:"white"}} to ="/events">events</Link>
        <Link style={{color:"white"}} to = "/apidemo">API Demo</Link>
        </nav>
       

    
    </div>
  )
}
