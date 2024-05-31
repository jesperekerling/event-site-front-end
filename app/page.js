import React from 'react'
import Link from 'next/link'


function FrontPage() {
  return (
    <div className='mx-auto text-center'>
      <h1 className='text-4xl pb-10 font-bold'>Event Website</h1>
      <p>Welcome inside the event page!</p>
      <p className='mt-10'>
        <Link href="/events" className='font-bold px-10 py-4 bg-blue-950 text-white rounded-lg hover:bg-blue-700'>
          View events
        </Link>
      </p>
    </div>
  )
}

export default FrontPage