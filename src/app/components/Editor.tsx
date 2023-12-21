import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import '../styles/editor.scss';

const tools = [
  [{ size: ['small', 'false', 'large', 'huge'] }],
  [{ font: ['sans-serif', 'serif', 'monospace'] }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ align: [] }],
  ['link', 'image', 'code-block'],
  [{ direction: 'rtl' }],
];

const modules = {
  toolbar: tools,
};

interface EditorProps {
  content: string;
  setContent: (content: string) => void;
}

const Editor = ({ content, setContent }: EditorProps): JSX.Element => {
  return (
    <div id="editor">
      <ReactQuill
        modules={modules}
        theme="snow"
        value={content}
        onChange={setContent}
      />
    </div>
  );
};

export default Editor;
