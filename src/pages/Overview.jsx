import React from 'react'
import { useUi } from "@/contexts/UIContext";

function Overview() {
  const { isClicked, handleClick, closeAll } = useUi();
  return (
    <div>
      <h1>Overview Page</h1>

    </div>
  )
}

export default Overview