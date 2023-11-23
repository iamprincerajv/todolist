import React, { useEffect, useState } from 'react'

export default function UpdateTodo(props) {

  const { showUpdate, closeUpdateBox, itemCheck, todo, setTodo } = props;
  const [updTitle, setUpdTitle] = useState("");
  const [updDesc, setUpdDesc] = useState("");
  const date = new Date();
  const modDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  const updater = (data) => {
    let toUpdate = todo.find(Element => Element.title == data);
    
    setUpdTitle(toUpdate.title);
    setUpdDesc(toUpdate.description);
  }

  const deleteTodo = (delD) => {

    let delTodo = {};
    let newTodo = [];

    // Getting the item to be deleted
    delTodo = todo.find(Element => Element.title == delD);

    for (let i = 0; i < todo.length; i++) {

      // deleting the item
      if (todo[i].title == delTodo.title) {
        continue;
      }

      newTodo.push(todo[i]);
    }
    setTodo(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  }

  const updateToDo = (e) => {
    e.preventDefault();

    deleteTodo(itemCheck);

    // verifying if the title is empty
    if (updTitle.length > 0) {

      // checking if the todo already exists
      let data = JSON.parse(localStorage.getItem("todo"));
      let result = false;

      if (data) {
        for (let i = 0; i < data.length; i++) {

          // checking for same title/activity
          if (data[i].title === updTitle) {
            alert("This activity already exists");
            result = true;

            break;
          }
        }

        if(!result) {
          data.unshift({ sno: modDate, title: updTitle, description: updDesc });
          localStorage.setItem("todo", JSON.stringify(data));

          closeUpdateBox();
          setTodo(data);
        }
      } else {
        localStorage.setItem("todo", JSON.stringify([{ sno: modDate, title: updTitle, description: updDesc }]));

        closeUpdateBox();
        setTodo(data);
      }

    } else {
      alert("Add a title first. Title cannot be empty")
    }
  };

  useEffect(()=>{
    updater(itemCheck);
  }, []);

  return (
    <div className={`${showUpdate} bg-orange-700 p-3 py-5 rounded-md text-white absolute left-auto top-1/3 shadow-lg shadow-orange-700`}>
      <label htmlFor="title" className='ms-2'> Title </label>
      <input value={updTitle} onChange={(e)=> setUpdTitle(e.target.value)} type="text" id='title' placeholder='Enter a title' className='block w-full sm:w-64 p-1.5 mb-3 rounded-md border border-doubled focus:outline-orange-700 border-none bg-orange-400 placeholder-orange-200' />
      <label htmlFor="descr" className='ms-2'> Description </label>
      <textarea value={updDesc} onChange={(e)=> setUpdDesc(e.target.value)} rows='3' type="text" id='descr' placeholder='Enter description' className='block w-full sm:w-64 p-1.5 mb-3 rounded-md border border-doubled focus:outline-orange-700 border-none bg-orange-400 placeholder-orange-200' />
      <div className='flex justify-evenly'>
        <button onClick={closeUpdateBox} className='block bg-orange-400 text-white font-semibold p-1.5 w-28 rounded-md'>CANCEL</button>
        <button onClick={updateToDo} className='block bg-orange-400 text-white font-semibold p-1.5 w-28 rounded-md'>UPDATE</button>
      </div>
    </div>
  )
}
