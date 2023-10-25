"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import deleteImg from '@/assets/trash-solid.svg';

export default function Home() {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todo")));
  }, []);

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

  return (
    <main>
      {todo && todo.length > 0 ? todo.map((items, index) => {
        return <div key={items.sno} className='border border-solid border-orange-700 m-1 mt-7 ms-7 p-6 rounded-md w-72'>
          <h4 className='font-bold text-lg w-52'>
            {items.title}
          </h4>
          <Image onClick={() => deleteTodo(items.title)} src={deleteImg} width={17} alt='Delete' className='relative left-56 -top-10 cursor-pointer' />
          <p className='text-sm'>
            {items.description}
          </p>
        </div>
      })
        : <p className='m-14 text-center'>Nothing to show</p>
      }
    </main>
  )
}
