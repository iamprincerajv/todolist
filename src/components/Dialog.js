import React, { useState } from 'react'

const Dialog = (props) => {

  const { deleteTodo, title, showDialog } = props;

  

  return (
    <div className={`bg-orange-700 text-white rounded p-4 text-center mt-5 ${showDialog} absolute top-1/3 left-auto`}>
      <p>What do you want to do?</p>
      <button className='bg-white text-orange-700 px-3 rounded-sm m-3'>Edit</button>
      <button onClick={() => deleteTodo(title)} className='bg-white text-orange-700 px-3 rounded-sm m-3'>Delete</button>
    </div>
  )
}

export default Dialog
