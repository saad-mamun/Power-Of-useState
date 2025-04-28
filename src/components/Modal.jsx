import React,{useState} from 'react'

const Modal = () => {
 const [open, setOpen] = useState(false);

 return (
   <div className="flex flex-col items-center justify-center h-screen">
     <button
       onClick={() => setOpen(true)}
       className="px-4 py-2 bg-blue-500 text-white rounded"
     >
       Open Modal
     </button>

     {open && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
         <div className="bg-white p-8 rounded shadow-lg flex flex-col items-center">
           <h2 className="text-2xl mb-4">Modal Title</h2>
           <button
             onClick={() => setOpen(false)}
             className="px-4 py-2 bg-red-500 text-white rounded"
           >
             Close
           </button>
         </div>
       </div>
     )}
   </div>
 );
}

export default Modal
