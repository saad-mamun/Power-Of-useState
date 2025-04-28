import React, {useState} from 'react'

const ToggleDark = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${
        dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        onClick={() => setDark(!dark)}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default ToggleDark
