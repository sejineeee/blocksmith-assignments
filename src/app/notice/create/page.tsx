"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Input from "../../components/Input";
import Button from "../../components/Button";

import ReactQuill from "react-quill";

import axios from "axios";

import "../../styles/noticeWritePage.scss";
import "react-quill/dist/quill.snow.css";

import { v4 as uuidv4 } from "uuid";

const tools = [
  [{ size: ["small", "false", "large", "huge"] }],
  [{ font: ["sans-serif", "serif", "monospace"] }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ align: [] }],
  ["link", "image", "code-block"],
  [{ direction: "rtl" }],
];

const modules = {
  toolbar: tools,
};

const Create = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<string>("");

  let myuuid = uuidv4();

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const createPost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9999/notice/",
        {
          id: myuuid,
          title: title,
          date: date,
          content: content,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        router.push("/notice");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createDate = (): void => {
    const date = new Date().toLocaleDateString('ko-KR');

    setDate(date);
  }

  const handleSubmit = async () => {
    await createPost();
  };

  const handleCancle = () => {
    const result = window.confirm('작성하던 것을 취소하겠습니까?');
    if(result) {
      router.push('/notice')
    }
  }

  useEffect(() => {
    createDate();
  }, [])


  return (
    <div className="notice-write-container">
      <h2 className="notice-heading">공지사항</h2>
      <div className="create-editor">
        <Input
          type="text"
          name="title"
          placeholder="제목"
          disabled={false}
          onChange={handleChange}
          magnifier={false}
        />
      </div>
      <div className="create-date">
        <p>{date}</p>
      </div>
      <div id="editor">
        <ReactQuill
          modules={modules}
          theme="snow"
          value={content}
          onChange={setContent}
        />
      </div>
      <div className="button-box">
        <Button
          type="button"
          disabled={false}
          name="cancel"
          content="취소"
          onClick={handleCancle}
        />
        <Button
          type="button"
          disabled={false}
          name="save"
          content="저장"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Create;
