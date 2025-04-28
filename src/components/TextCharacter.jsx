import React, {useState} from 'react'

const TextCharacter = () => {
const [text, setText] = useState("");

return (
  <div className="flex flex-col items-center gap-4 p-6">
    <textarea
      className="border p-2 rounded w-64 h-32"
      placeholder="Write something..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <p className="text-sm text-gray-500">{text.length} characters</p>
  </div>
);
}

export default TextCharacter
