'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

function ShowEvent() {
  const [event, setEvent] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
  }, [id])

  return (
    <div>
        <h1 className='mb-7 text-3xl'>{event.title}</h1>
        
        <img src={event.image} alt={event.description} />
        
        <h2 className='my-5'>Event Description:</h2>
        <p className='mb-7'>{event.description}</p>
        
        <p>Price: ${event.price}</p>
    </div>
  )
}

export default ShowEvent