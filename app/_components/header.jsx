import Link from 'next/link'

function Header() {
  return (
    <header className='container p-3 bg-slate-900 text-white flex'>

      <span className='text-xl flex-1 pl-20'>
        <Link href="/">
          Event site
        </Link>
      </span>

      <ul className='inline-flex pr-20 gap-5'>
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
      
    </header>
  )
}

export default Header