import React, { useState } from 'react'

const RemoveList = () => {

    const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

    const removeItem = (indexToRemove) => {
      setItems(items.filter((_, index) => index !== indexToRemove));
    };

    return (
      <div className="p-6 flex flex-col items-center gap-4">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 rounded w-64"
            >
              {item}
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default RemoveList
