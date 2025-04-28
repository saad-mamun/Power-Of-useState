import React, {useState} from 'react'

const BColor = () => {
 const [color, setColor] = useState("bg-white");

 return (
   <div className={`h-screen flex items-center justify-center ${color}`}>
     <button
       className="px-4 py-2 bg-black text-white rounded"
       onClick={() => setColor("bg-yellow-300")}
     >
       Change Background
     </button>
   </div>
 );
}

export default BColor
