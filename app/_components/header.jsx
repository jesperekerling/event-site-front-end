import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { andada_pro } from './../fonts'



function Header() {
  return (
    <header className='container p-3 bg-slate-900 text-white flex'>

      <span className={`${andada_pro.className} mx-10 text-2xl flex-1`}>
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