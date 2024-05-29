'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function ShowEvents() {
  const [events, setEvents] = useState([])
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/events')
      .then(response => response.json())
      .then(data => {
        // Sort events by location and date
        data.sort((a, b) => {
          if (a.location < b.location) return -1;
          if (a.location > b.location) return 1;
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          return 0;
        });
        setEvents(data);
      })
  }, [])

  // Get unique locations
  const locations = [...new Set(events.filter(event => new Date(event.date) >= new Date()).map(event => event.location))];

  // Filter events by selected location, date range, and future dates
  const filteredEvents = events.filter(event => {
    if (selectedLocation && event.location !== selectedLocation) {
      return false;
    }
    if (startDate && new Date(event.date) < new Date(startDate)) {
      return false;
    }
    if (endDate && new Date(event.date) > new Date(endDate)) {
      return false;
    }
    if (new Date(event.date) < new Date()) {
      return false;
    }
    return true;
  });

  return (
    <div>
        <h1 className='text-3xl font-bold mb-10'>All Events</h1>
        <div className='text-center'>
          <label>
            Start Date:
            <input type="date" onChange={e => setStartDate(e.target.value)} />
          </label>
          <label>
            End Date:
            <input type="date" onChange={e => setEndDate(e.target.value)} />
          </label>
        </div>

        <ul className='flex py-5 items-center'>
          <li 
            onClick={() => setSelectedLocation(null)} 
            style={{cursor: 'pointer', textDecoration: selectedLocation === null ? 'underline' : 'none'}} 
            className='font-bold mr-2'
          >
            All Cities
          </li>
          {locations.map((location, index) => (
            <li 
              key={index} 
              onClick={() => setSelectedLocation(location)} 
              style={{cursor: 'pointer', textDecoration: location === selectedLocation ? 'underline' : 'none'}} 
              className='font-bold mr-2'
            >
              {location}
            </li>
          ))}
        </ul>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6'>
          {filteredEvents.map((event, index) => (
            <div 
              key={index} 
              style={{opacity: new Date(event.date) < new Date() ? 0.5 : 1}}
            >
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