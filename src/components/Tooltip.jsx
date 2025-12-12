import { useState } from "react";

export default function Tooltip({ children, content, posistion }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div
          className={` 
          absolute ${posistion}
            px-3 py-2 text-sm rounded-lg z-50 whitespace-nowrap shadow-2xl animate-tooltip`}>
          {content}
        </div>
      )}
    </div>
  );
}
