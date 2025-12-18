import React from 'react'
import { useUi } from "@/contexts/UIContext";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

function Overview() {
  const { activePopup, openPopup, closePopup } = useUi();
  return (
    <div>
      <h1>Overview Page</h1>
      <div className="space-y-1">
        {Object.entries(initialState).map(([key, value]) => (
          <div key={key} className="flex justify-between w-48">
            <span>{key}</span>
            <span className={activePopup === key ? "text-green-600" : "text-red-600"}>
              {activePopup === key ? "ON" : "OFF"}
            </span>
          </div>
        ))}
      </div>
      
      {/* أزرار للاختبار */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => openPopup("chat")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Open Chat
        </button>

        <button
          onClick={() => openPopup("cart")}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Open Cart
        </button>

        <button
          onClick={() => openPopup("userProfile")}
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          Open Profile
        </button>

        <button
          onClick={() => openPopup("notification")}
          className="px-3 py-1 bg-orange-500 text-white rounded"
        >
          Open Notification
        </button>

        <button
          onClick={closePopup}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Close All
        </button>
      </div>
    </div>
  )
}

export default Overview