import React, {useState} from 'react'

const CenterModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-indigo-500 text-white rounded"
      >
        Show Modal
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h1 className="text-xl font-semibold mb-4">
              Blurred Background Modal
            </h1>
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

export default CenterModal
