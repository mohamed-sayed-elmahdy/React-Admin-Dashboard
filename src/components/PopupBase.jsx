import { forwardRef } from "react";

const PopupBase = forwardRef(function PopupBase({ children, className = "" }, ref) {
  return (
    <div
      ref={ref}
      className={`
        absolute right-4 top-16 z-50
        origin-top-right
        scale-95 opacity-0
        animate-popup
        animate-slide-in-left
        ${className}
      `}
    >
      {children}
    </div>
  );
});

export default PopupBase;
