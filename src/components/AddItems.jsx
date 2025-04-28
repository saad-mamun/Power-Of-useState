import React,{useState} from 'react'

const AddItems = () => {
 const [items, setItems] = useState([]);
 const [input, setInput] = useState("");

 const addItem = () => {
   if (input.trim()) {
     setItems([...items, input]);
     setInput("");
   }
 };

 return (
   <div className="p-6 flex flex-col items-center gap-4">
     <input
       type="text"
       className="border p-2 rounded w-64"
       placeholder="Add item..."
       value={input}
       onChange={(e) => setInput(e.target.value)}
     />
     <button
       onClick={addItem}
       className="px-4 py-2 bg-blue-500 text-white rounded"
     >
       Add
     </button>
     <ul className="mt-4 space-y-2">
       {items.map((item, index) => (
         <li key={index} className="border p-2 rounded">
           {item}
         </li>
       ))}
     </ul>
   </div>
 );
}

export default AddItems
