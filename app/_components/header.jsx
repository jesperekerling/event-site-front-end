import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { albert_sans } from './../fonts'



function Header() {
  return (
    <header className='container p-3 bg-slate-900 text-white flex items-center font-semibold'>

      <span className={`${albert_sans.className} mx-8 text-2xl flex-1 font-bold`}>
        <Link href="/" className='hover:opacity-75'>
          Event site
        </Link>
      </span>

      <ul className='inline-flex gap-5'>
        <li>
          <Link href="/events">
            All Events
          </Link>
        </li>
        <li>
          <Link href="/my-events">
            My Events
          </Link>
        </li>
      </ul>

      <span className="px-5 mt-2">
        <UserButton />
      </span>
      
    </header>
  )
}

export default Header