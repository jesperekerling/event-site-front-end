'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function ShowEvents() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <div>
        <h1>Events here</h1>
        <ul>
            {events.map((event, index) => (
              <li key={index}>
                <Link href={`/events/${event._id}`}>
                    <img src={event.image} alt={event.description} width={100} height={100} className="object-cover" />
                    <p>{event.description}</p>
                </Link>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default ShowEvents