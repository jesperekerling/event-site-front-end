'use client'

import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import Image from 'next/image'

function ShowMyEvents() {
  const [events, setEvents] = useState([])
  const { user } = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/api/events?id=${user.id}`)
        .then(response => response.json())
        .then(data => {
          setEvents(data)
          setLoading(false)
        })
    }
  }, [user])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <h1 className='text-3xl font-extrabold text-center mb-10'>My Events</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6'>
        {Array.isArray(events) && events.map((event, index) => (
          <div key={index}>
            <h2>{event.title}</h2>
            <Image
              src={event.image}
              alt={event.description}
              width={500}
              height={300}
              className='object-cover aspect-video hover:opacity-75 transition-opacity duration-200'
            />
            <p>{event.date} - {event.location}</p>
            <p>Price: {event.price}</p>
            <p>Seats: {event.seats}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default ShowMyEvents