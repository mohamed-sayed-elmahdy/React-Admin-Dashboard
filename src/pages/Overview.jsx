import React from 'react'
import { useUi } from "@/contexts/UIContext";

function Overview() {
  const { isClicked, handleClick, closeAll } = useUi();
  return (
    <div>
      <h1>Overview Page</h1>
      <div className="space-y-1">
        {Object.entries(isClicked).map(([key, value]) => (
          <div key={key} className="flex justify-between w-48">
            <span>{key}</span>
            <span className={value ? "text-green-600" : "text-red-600"}>
              {value ? "ON" : "OFF"}
            </span>
          </div>
        ))}
      </div>
      
      {/* أزرار للاختبار */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => handleClick("chat")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Open Chat
        </button>

        <button
          onClick={() => handleClick("cart")}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Open Cart
        </button>

        <button
          onClick={() => handleClick("userProfile")}
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          Open Profile
        </button>

        <button
          onClick={() => handleClick("notification")}
          className="px-3 py-1 bg-orange-500 text-white rounded"
        >
          Open Notification
        </button>

        <button
          onClick={closeAll}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Close All
        </button>
      </div>
    </div>
  )
}

export default Overview