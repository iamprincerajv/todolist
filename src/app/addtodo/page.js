'use client'
import React, { useState } from 'react'

export default function AddToDo() {

  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const date = new Date();
  const modDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  const addToDo = (e) => {
    e.preventDefault();

    // verifying if the title is empty
    if (title.length > 0) {

      // checking if the todo already exists
      let data = JSON.parse(localStorage.getItem("todo"));
      let result = false;

      if (data) {
        for (let i = 0; i < data.length; i++) {

          // checking for same title/activity
          if (data[i].title === title) {
            alert("This activity already exists");
            result = true;

            break;
          }
        }

        if(!result) {
          data.push({ sno: modDate, title, description });
          localStorage.setItem("todo", JSON.stringify(data));

          setTitle("");
          setDesc("");
        }
      } else {
        localStorage.setItem("todo", JSON.stringify([{ sno: modDate, title, description }]));

        setTitle("");
        setDesc("");
      }

    } else {
      alert("Add a title first. Title cannot be empty")
    }
  };

  return (
    <div className='w-full grid grid-cols-1 place-items-center'>
      <h3 className='text-xl font-bold m-8'>{`What's Your Plan`}</h3>
      <form className='p-7 pt-0'>
        <label htmlFor="title" className='ms-2'>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Add a title' id='title' className='block w-full sm:w-80 p-2 mb-3 rounded-md border border-doubled border-orange-700 focus:outline-green-500' />
        <label htmlFor="description" className='ms-2'>Description (Optional)</label>
        <input value={description} onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Add a description' id='description' className='block w-full sm:w-80 p-2 mb-3 rounded-md border border-doubled border-orange-700 focus:outline-green-500' />
        <button type='submit' onClick={addToDo} className='block bg-orange-700 text-white font-bold p-2 w-full sm:w-80 rounded-md'>ADD</button>
      </form>
    </div>
  )
}
