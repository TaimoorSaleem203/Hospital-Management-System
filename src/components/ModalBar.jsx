
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
      className={`fixed inset-0 font-medium text-black bg-black/35 flex items-center justify-center z-20`}
    >

      <div
        className="bg-white mx-auto rounded-lg shadow-xl max-w-lg w-full p-6"
      >

        <div className="flex gap-4 items-start">
          <div className="rounded-full bg-gray-200 px-3 py-2">
            <i className={icon}></i>
          </div>

          <div className="w-full flex flex-col text-start gap-1">
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded"
          >
            Confirm
          </button>
          <button
            type="button"
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