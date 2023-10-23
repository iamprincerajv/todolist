"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import deleteImg from '@/assets/trash-solid.svg';
import { useRouter } from 'next/navigation';

export default function Home() {

  const [todo, setTodo] = useState([]);
  const router = useRouter();

useEffect(()=>{
  setTodo(JSON.parse(localStorage.getItem("todo")));
  // console.log(localStorage.getItem('todo'))
},[]);

const deleteTodo = () => {
  localStorage.clear();
  router.reload();
}

  return (
    <main>
        {todo ? todo.map((items, index) => {
          return <div key={items.sno} className='border border-solid border-orange-700 m-1 mt-7 ms-7 p-6 rounded-md w-72'>
          <h4 className='font-bold text-lg w-52'>
            {items.title}
          </h4>
          <Image onClick={deleteTodo} src={deleteImg} width={17} alt='Delete' className='relative left-56 -top-10 cursor-pointer' />
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
