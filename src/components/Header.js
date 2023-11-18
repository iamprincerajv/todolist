'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Header = () => {

  const pathname = usePathname();

  return (
    <header className='flex sticky bg-orange-700 text-white justify-start items-center h-12 p-1'>
      <p className='text-2xl ms-4 sm:ms-8 font-bold'>AcTo</p>
      <ul className='flex justify-evenly w-full sm:w-96 text-sm'>
        <li className={`py-1 px-3 rounded ${pathname === "/" ? "bg-orange-900" : ""}`} > <Link href="/">Home</Link> </li>
        <li className={`py-1 px-3 rounded ${pathname === "/addtodo" ? "bg-orange-900" : ""}`} > <Link href="/addtodo">Add</Link> </li>
        <li className={`py-1 px-3 rounded ${pathname === "/history" ? "bg-orange-900" : ""}`} > <Link href="/history">History</Link> </li>
      </ul>
    </header>
  )
}

export default Header
