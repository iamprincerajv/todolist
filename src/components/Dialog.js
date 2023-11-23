import React, { useState } from 'react'

const Dialog = (props) => {

  const { deleteTodo, title, showDialog, closeDialog, editClick } = props;



  return (
    <div className={`bg-orange-700 text-white rounded p-4 py-6 text-center mt-5 ${showDialog} absolute top-1/3 left-auto shadow-lg shadow-orange-700`}>
      <p className='bg-orange-600 rounded p-1'>What do you want to do?</p>
      <div className='flex items-center w-52 justify-evenly font-bold mt-3'>
        <p onClick={closeDialog} className='h-6 px-3 rounded-md cursor-pointer hover:bg-white hover:text-orange-700'>Close</p>
        <button onClick={()=> editClick(title)} className='text-white px-3 rounded-md hover:bg-white hover:text-orange-700'>Edit</button>
        <button onClick={() => deleteTodo(title)} className='text-white px-3 rounded-md hover:bg-white hover:text-orange-700'>Delete</button>
      </div>
    </div>
  )
}

export default Dialog
