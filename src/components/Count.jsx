import React, { useState } from 'react'

const Count = () => {
    const [count,setCount] =useState(1);

  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-3 mx-auto mt-10">
        <button 
        onClick={() => setCount(count - 1)}
        className='bg-red-500 hover:bg-red-600 transition-all delay-75  text-white px-4 py-1 rounded-l'
        >Decrease</button>
        <h1 className='w-12 border-2 ps-2'>{count}</h1>
        <button 
        onClick={() => setCount(count + 1)}
        className='bg-green-500 hover:bg-green-600 transition-all delay-75 text-white px-4 py-1 rounded-r'
        >Increase</button>
      </div>
    </div>
  );
}

export default Count
