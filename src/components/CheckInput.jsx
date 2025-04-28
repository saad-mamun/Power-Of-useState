import React, {useState} from 'react'

const CheckInput = () => {
  const [agree, setAgree] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        I agree to the terms
      </label>
      <button
        className={`px-4 py-2 rounded ${
          agree
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!agree}
      >
        Submit
      </button>
    </div>
  );
}

export default CheckInput
