import React from 'react'
import PopupBase from "@/components/PopupBase";

function UserProfile() {
  return (

    <PopupBase className=" w-80 bg-white shadow-xl rounded-lg p-4 z-50">
      <h3 className="font-semibold mb-2">User Profile</h3>
      <p>Your profile is empty</p>
    </PopupBase>
  )
}

export default UserProfile