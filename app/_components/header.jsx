import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header className='container p-3 bg-slate-900 text-white flex'>

      <span className='text-xl flex-1 pl-20'>
        <Link href="/">
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

      <span className="px-5">
        <UserButton />
      </span>
      
    </header>
  )
}

export default Header