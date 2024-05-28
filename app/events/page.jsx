'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function ShowEvents() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <div>

        <h1 className='text-3xl font-bold mb-10'>All Events</h1>
        <p>Upcoming events in Sweden.</p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6'>
            {events.map((event, index) => (
              <div key={index}>
                <Link href={`/events/${event._id}`}>
                    <Image
                      src={event.image}
                      alt={event.description}
                      width={500}
                      height={300}
                      className='object-cover aspect-video hover:opacity-75 transition-opacity duration-200'
                    />
                    <p className='font-bold md:text-lg py-2'>{event.title}</p>
                    <p className='text-sm md:text-base'>{event.date} - {event.location}</p>
                </Link>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ShowEvents