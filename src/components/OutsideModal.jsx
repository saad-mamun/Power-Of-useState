import React, {useState} from 'react'

const OutsideModal = () => {
const [open, setOpen] = useState(false);

const handleOutsideClick = (e) => {
  if (e.target.id === "modal-container") {
    setOpen(false);
  }
};

return (
  <div className="h-screen flex items-center justify-center">
    <button
      onClick={() => setOpen(true)}
      className="px-4 py-2 bg-pink-500 text-white rounded"
    >
      Open Modal
    </button>

    {open && (
      <div
        id="modal-container"
        className="fixed inset-0 bg-black/50 flex items-center justify-center"
        onClick={handleOutsideClick}
      >
        <div className="bg-white p-8 rounded">
          <h2 className="text-2xl mb-4">Click outside to close</h2>
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

export default OutsideModal
