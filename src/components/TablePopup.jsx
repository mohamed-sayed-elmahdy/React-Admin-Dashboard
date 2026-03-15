import { AiOutlineClose } from 'react-icons/ai'
function TablePopup({ data, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 transition-all duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="fixed top-50 left-1/2 -translate-x-1/2 bg-white max-w-[550px] w-full p-4 rounded-lg shadow-lg
                   transform transition-all duration-300 ease-out animate-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Order Details</h2>
          <button onClick={onClose} className="text-primary hover:text-gray-700">
            <AiOutlineClose />
          </button>
        </div>
        <hr className='border-black/10 my-2'/>
        <div className="mt-4 space-y-4">
          <p className='flex justify-between'><strong>Order ID:</strong> {data.OrderID}</p>
          <p className='flex justify-between'><strong>Customer Name:</strong> {data.CustomerName}</p>
          <p className='flex justify-between'><strong>Total Amount:</strong> <span className='font-bold'>${data.TotalAmount}</span></p>
          <p className='flex justify-between'><strong>Order Items:</strong> {data.OrderItems}</p>
          <p className='flex justify-between'><strong>Location:</strong> {data.Location}</p>
          <p className='flex justify-between'><strong>Status:</strong> 
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: data.StatusBg, color: "white" }}>
              {data.Status}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}


export default TablePopup;