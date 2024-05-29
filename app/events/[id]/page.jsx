'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useUser } from '@clerk/clerk-react'




function ShowEvent() {
  const [event, setEvent] = useState({})
  const { id } = useParams()
  const { user } = useUser();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
  }, [id])

  const fetchEvent = () => {
    fetch(`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
  }
  
  const handleButtonClick = () => {
    const userId = user.id;
  
    fetch(`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/events/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
    .then(() => fetchEvent()) // Fetch the updated data after the POST request
  }
  
  useEffect(() => {
    fetchEvent() // Fetch the data when the component mounts
  }, [id])

  return (
    <div>
        <p><a href="/events">Back to events</a></p>
        <h1 className='mb-7 text-3xl font-bold'>{event.title}</h1>
        
        <img src={event.image} alt={event.description} />
        
        <button 
          className='bg-black text-white py-5 px-10 mt-2 rounded-lg hover:opacity-75 font-bold'
          onClick={handleButtonClick}
        >
          Boka plats på eventet
        </button>

        <h2 className='my-5 font-bold'>Event Description</h2>
        <p className='mb-7'>{event.description}</p>
        
        <p>Price: ${event.price}</p>
        <p>Date: {event.date}</p>
        <p>People Attending: {event.bookings}</p>
        <p>
            Total Seats: {event.seats}
        </p>
    </div>
  )
}

export default ShowEvent