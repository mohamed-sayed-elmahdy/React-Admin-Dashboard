import { useRef, useState } from "react";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";

function TextEditor() {
  const editorRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const handleFormat = (command, value = false) => {
    document.execCommand(command, false, value);
    editorRef.current.focus(); // keep focus on editor
  }
  const checkFormats = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
    });
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Text Editor</h2>
      {/* 🟣 Toolbar */}
      <div className="flex gap-2 items-center mt-4 mb-2">
        <button onMouseDown={(e) => { e.preventDefault(); handleFormat("bold"); }} className={`cursor-pointer px-3 py-1 border rounded ${activeFormats.bold ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`} type="button"><FaBold /></button>
        <button onMouseDown={(e) => { e.preventDefault(); handleFormat("italic"); }} className={`cursor-pointer px-3 py-1 border rounded ${activeFormats.italic ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`} type="button"><FaItalic /></button>
        <button onMouseDown={(e) => { e.preventDefault(); handleFormat("underline"); }} className={`cursor-pointer px-3 py-1 border rounded ${activeFormats.underline ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`} type="button"><FaUnderline /></button>
      </div>
      {/* 🟢 Editor */}
      <div
        ref={editorRef}
        contentEditable
        onKeyUp={checkFormats}
        onMouseUp={checkFormats}
        suppressContentEditableWarning
        className="border p-3 min-h-[200px] rounded-md outline-none"
      />
    </div>
  );
}

export default TextEditor;