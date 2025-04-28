import React, { useState } from "react"

const UpdateText = () => {
const [text, setText] = useState("Hello");

return (
  <div className="flex flex-col items-center gap-4 p-6">
    <h1 className="text-xl">{text}</h1>
    <button
      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      onClick={() => setText("You clicked me!")}
    >
      Click Me
    </button>
  </div>
);
}

export default UpdateText
