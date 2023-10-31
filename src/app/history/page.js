'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import deleteImg from "@/assets/trash-solid.svg"

const History = () => {

  const [deletedTodo, setDeleted] = useState([]);

  useEffect(()=>{
    setDeleted(JSON.parse(localStorage.getItem("deletedTodo")));
  },[])

  // clearing history
  const deleteHisto = () => {
    localStorage.removeItem("deletedTodo");
    setDeleted([]);
  }

  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center'>
      <div onClick={deleteHisto} className='flex justify-between w-96 p-3 cursor-pointer sm:hidden'>
        <p>Clear History</p>
        <Image src={deleteImg} width={20} alt='Delete' />
      </div>

      <div onClick={deleteHisto} className='hidden sm:block absolute top-1 right-4 bg-white py-3 px-4 rounded-md cursor-pointer'>
        <Image src={deleteImg} alt='Delete' width={18} />
      </div>

      {deletedTodo && deletedTodo.length > 0 ? deletedTodo.map((items, index) => {
        return <div key={items.sno} className='border border-solid border-orange-700 m-1 mt-7 p-6 rounded-md w-96 sm:w-72'>
          <span className='relative -top-4 -left-2 text-xs text-orange-700'> {items.sno} </span>
          <h4 className='font-bold text-lg w-52'>
            {items.title}
          </h4>
          <p className='text-sm'>
            {items.description}
          </p>
        </div>
      })
        : <p className='absolute top-1/4 text-center w-full'>Nothing to show</p>
      }
    </main>
  )
}

export default History
