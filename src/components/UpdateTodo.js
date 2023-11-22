import React from 'react'

export default function UpdateTodo(props) {

  const { showUpdate, closeUpdateBox } = props;

  return (
    <div className={`${showUpdate} bg-orange-700 p-3 py-5 rounded-md text-white absolute left-auto top-1/3 shadow-lg shadow-orange-700`}>
      <label htmlFor="title" className='ms-2'> Title </label>
      <input type="text" id='title' placeholder='Enter a title' className='block w-full sm:w-64 p-1.5 mb-3 rounded-md border border-doubled focus:outline-orange-700 border-none bg-orange-400 placeholder-orange-200' />
      <label htmlFor="descr" className='ms-2'> Description </label>
      <textarea rows='3' type="text" id='descr' placeholder='Enter description' className='block w-full sm:w-64 p-1.5 mb-3 rounded-md border border-doubled focus:outline-orange-700 border-none bg-orange-400 placeholder-orange-200' />
      <div className='flex justify-evenly'>
        <button onClick={closeUpdateBox} className='block bg-orange-400 text-white font-semibold p-1.5 w-28 rounded-md'>CANCEL</button>
        <button className='block bg-orange-400 text-white font-semibold p-1.5 w-28 rounded-md'>UPDATE</button>
      </div>
    </div>
  )
}
