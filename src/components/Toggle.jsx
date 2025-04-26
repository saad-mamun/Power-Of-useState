import React, { useState } from 'react'

const Toggle = () => {
    
    const [show, setShow] = useState(false)

  return (
    <div >
      <button 
      onClick={()=>setShow(!show)}
      className='px-4 py-1 bg-amber-700 text-white rounded-lg'>
        {show ? "Hidden" : "Show"}
      </button>
      {show && <p className='text-gray-700'>Here is some hidden text</p>}
    </div>
  )
}

export default Toggle
