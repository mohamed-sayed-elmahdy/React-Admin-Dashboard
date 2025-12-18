import { useState } from "react";

export default function Tooltip({ children, content, position, customCss = "" }) {
  const [show, setShow] = useState(false);

  // Base classes for tooltip
  let tooltipClasses = `hidden md:block bg-(--primary) text-(--text) absolute px-3 py-2 text-sm rounded-lg z-50 whitespace-nowrap shadow-2xl animate-tooltip ${customCss}`;

  // Adjust position based on prop
  switch (position) {
    case "top left":
      tooltipClasses += " -start-10 top-2 -translate-y-2";
      break;
    case "top center":
      tooltipClasses += " start-1/2 top-0 -translate-x-1/2 -translate-y-2";
      break;
    case "top right":
      tooltipClasses += " end-0 top-0 -translate-y-2";
      break;
    case "bottom left":
      tooltipClasses += " start-0 bottom-0 translate-y-2";
      break;
    case "bottom center":
      tooltipClasses += " start-1/2 top-15 translate-y-2";
      break;
    case "bottom right":
      tooltipClasses += " end-0 bottom-0 translate-y-2";
      break;
    case "left":
      tooltipClasses += " start-0 top-1/2 -translate-x-full -translate-y-1/2";
      break;
    case "right":
      tooltipClasses += " end-0 top-1/2 translate-x-full -translate-y-1/2";
      break;
    default:
      tooltipClasses += " start-1/2 bottom-2 -translate-x-1/2 translate-y-2";
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className={tooltipClasses}>
          {content}
        </div>
      )}
    </div>
  );
}
