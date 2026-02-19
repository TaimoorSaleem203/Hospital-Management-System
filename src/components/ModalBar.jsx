const ModalBar = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  icon
}) => {

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 bg-black/35 flex items-center justify-center z-50`}
    >

      <div
        className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6"
      >

        <div className="flex gap-4 items-start">
          <div className="rounded-full bg-gray-200 p-3">
            <i className={icon}></i>
          </div>

          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-teal-500 text-white rounded"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  )
}

export default ModalBar