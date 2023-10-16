"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";

import MenuBar from "./MenuBar";

import "../styles/tiptap.scss";

const Tiptap = ({ onClick }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Highlight.configure({ multicolor: true }),
    ],
    content: "<p></p>",
  });

  const handleSubmit = ({ editor }) => {
    console.log(editor);
  };

  return (
    <>
      <div className="editor">
        {editor && <MenuBar editor={editor} />}
        <EditorContent className="editor__content" editor={editor} />
      </div>
      <button onClick={() => handleSubmit(editor)}>Test</button>
    </>
  );
};

export default Tiptap;
