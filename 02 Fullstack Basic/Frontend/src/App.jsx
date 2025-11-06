import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [jokes,setJokes] = useState([])
  const[currentIndex, setCurrentIndex] = useState(0)

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log(`${err} while fetching Jokes`)
    })
  },[])

  const nextJoke = ()=>{
    if (jokes.length === 0) return
    setCurrentIndex((i) => (i + 1)% jokes.length)

  }

  return (
    <>
    <div className='flex flex-col  gap-4 justify-center items-center font-bold text-2xl bg-slate-800 text-white h-screen '>
      <p>Some Jokes</p>
    <div className='text-sm'> Joke Count : {jokes.length} </div>
    {jokes.length > 0 ? (
            <div key={jokes[currentIndex].id}>
        <h3>
        {jokes[currentIndex].title}
        </h3>
        <p className='text-4xl text-amber-200'>{jokes[currentIndex].content}</p>
      </div>
    ):(
      <p> No Jokes Avl. </p>
    )

    }
    <button className='bg-blue-500 px-5 duration-300 hover:shadow-md  shadow-blue-600 py-3 rounded-xl text-sm text-gray-200 cursor-pointer  hover:bg-blue-400' onClick={nextJoke}> Load Joke</button>
    </div>
    </>
  )
}

export default App
