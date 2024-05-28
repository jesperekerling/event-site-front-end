'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

function ShowEvent() {
  const [event, setEvent] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
  }, [id])

  return (
    <div>
        <p><a href="/events">Back to events</a></p>
        <h1 className='mb-7 text-3xl font-bold'>{event.title}</h1>
        
        <img src={event.image} alt={event.description} />
        
        <button className='bg-black text-white py-5 px-10 mt-2 rounded-lg hover:opacity-75 font-bold'>
          Boka event
        </button>
        <h2 className='my-5 font-bold'>Event Description</h2>
        <p className='mb-7'>{event.description}</p>
        
        <p>Price: ${event.price}</p>
        <p>Date: {event.date}</p>
        <p>
            Seats: {event.seats} (2500 left)
        </p>
    </div>
  )
}

export default ShowEvent