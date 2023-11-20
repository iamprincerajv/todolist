"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import deleteImg from '@/assets/trash-solid.svg';
import Dialog from '@/components/Dialog';

export default function Home() {

  const [todo, setTodo] = useState([]);
  const [showDialog, setDialog] = useState('hidden');
  const [itemCheck, setItemCheck] = useState("");

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todo")));
  }, []);

  const todoClick = (title) => {
    setItemCheck(title);

    if (showDialog == 'hidden') {
      setDialog('');
    } else {
      setDialog('hidden');
    }
  }

  const closeDialog = () => {
    setDialog("hidden");
  };

  const deleteTodo = (delD) => {

    let delTodo = {};
    let newTodo = [];

    // Getting the item to be deleted
    delTodo = todo.find(Element => Element.title == delD);

    for (let i = 0; i < todo.length; i++) {

      // deleting the item
      if (todo[i].title == delTodo.title) {
        let deleted = JSON.parse(localStorage.getItem("deletedTodo"));

        if (deleted) {
          deleted.push(todo[i]);
          localStorage.setItem("deletedTodo", JSON.stringify(deleted));
        } else {
          localStorage.setItem("deletedTodo", JSON.stringify([todo[i]]));
        }

        continue;
      }

      newTodo.push(todo[i]);
    }
    setTodo(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
  }

  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center'>
      {todo && todo.length > 0 ? todo.map((items, index) => {
        return <div key={items.sno} onClick={() => todoClick(items.title)} className='border border-solid border-orange-700 m-1 mt-7 p-6 cursor-pointer rounded-md w-11/12 sm:w-72'>
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

      <Dialog deleteTodo={deleteTodo} title={itemCheck} showDialog={showDialog} closeDialog={closeDialog} />
    </main>
  )
}
