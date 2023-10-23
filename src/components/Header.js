import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex bg-orange-700 text-white justify-start items-center h-14'>
      <p className='text-2xl ms-8'>AcTo</p>
      <ul className='flex justify-evenly w-96'>
        <li> <Link href="/">Home</Link> </li>
        <li> <Link href="/addtodo">Add</Link> </li>
        <li> <Link href="/history">History</Link> </li>
      </ul>
    </header>
  )
}

export default Header
