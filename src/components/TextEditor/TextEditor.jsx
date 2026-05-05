import { useEffect, useRef, useState } from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight } from "react-icons/md";
import { MdUndo, MdRedo } from "react-icons/md";
import { FaListUl, FaListOl } from "react-icons/fa";

function TextEditor() {
  const editorRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  //   تحميل من localStorage
  useEffect(() => {
    const saved = localStorage.getItem("editor-content");
    if (saved && editorRef.current) {
      editorRef.current.innerHTML = saved;
    }
  }, []);

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    checkFormats();
  };
  // handleFont size
  const applyFontSize = (size) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");

    span.style.fontSize = size + "px";
    span.textContent = range.toString();

    range.deleteContents();
    range.insertNode(span);
  };


  const checkFormats = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
    });
  };


  // Copy
  const handleCopy = () => {
    const html = editorRef.current.innerHTML;
    navigator.clipboard.writeText(html);
  };

  //  Save Local
  const handleSaveLocal = () => {
    const html = editorRef.current.innerHTML;
    localStorage.setItem("editor-content", html);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Text Editor</h2>

      {/* 🟣 Toolbar */}
      <div className="flex flex-wrap gap-4 items-center mt-4 mb-2">

        {/* Text Style */}
        <button onMouseDown={(e) => { e.preventDefault(); handleFormat("bold"); }}
          className={`cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded ${activeFormats.bold ? "bg-primary text-white" : ""}`}>
          <FaBold />
        </button>

        <button onMouseDown={(e) => { e.preventDefault(); handleFormat("italic"); }}
          className={`cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded ${activeFormats.italic ? "bg-primary text-white" : ""}`}>
          <FaItalic />
        </button>

        <button onMouseDown={(e) => { e.preventDefault(); handleFormat("underline"); }}
          className={`cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded ${activeFormats.underline ? "bg-primary text-white" : ""}`}>
          <FaUnderline />
        </button>

        {/* Alignment */}
        <button onMouseDown={(e) => { e.preventDefault(); handleFormat("justifyLeft"); }}
          className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded">
          <MdFormatAlignLeft />
        </button>

        <button className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded" onMouseDown={(e) => { e.preventDefault(); handleFormat("justifyCenter"); }}>
          <MdFormatAlignCenter />
        </button>

        <button className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded" onMouseDown={(e) => { e.preventDefault(); handleFormat("justifyRight"); }}>
          <MdFormatAlignRight />
        </button>

        {/* Lists */}
        <button className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded" onMouseDown={(e) => { e.preventDefault(); handleFormat("insertUnorderedList"); }}>
          <FaListUl />
        </button>

        <button className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded" onMouseDown={(e) => { e.preventDefault(); handleFormat("insertOrderedList"); }}>
          <FaListOl />
        </button>

        {/* Font Size */}
        <select
          onChange={(e) => applyFontSize(e.target.value)}
          className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="24">24</option>
          <option value="26">26</option>
          <option value="28">28</option>
          <option value="36">36</option>
          <option value="48">48</option>
          <option value="72">72</option>
        </select>

        {/* Text Color */}
        <input
          type="color"
          onChange={(e) => handleFormat("foreColor", e.target.value)}
          className="border  rounded p-0 cursor-pointer"
        />
        {/* Undo/Redo */}
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand("undo");
          }}
          className="text-3xl cursor-pointer "
        >
          <MdUndo />
        </button>

        <button
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand("redo");
          }}
          className="text-3xl cursor-pointer"
        >
          <MdRedo />
        </button>
        {/* clear */}
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand("removeFormat");
            setActiveFormats({ bold: false, italic: false, underline: false });
          }}
          className="text-sm cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 px-3 py-1 border rounded"
        >
          Clear Format
        </button>
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

      {/* Actions */}
      <div className="flex gap-2 justify-end mt-4">
        <button onClick={handleCopy} className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 border px-3 py-1 rounded">Copy</button>
        <button onClick={handleSaveLocal} className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 border px-3 py-1 rounded">Save</button>
      </div>
    </div>
  );
}

export default TextEditor;