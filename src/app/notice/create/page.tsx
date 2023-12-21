'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '../../components/Button';
import Editor from '../../components/Editor';
import DateEditor from '@/app/components/DateEditor';

import { v4 as uuidv4 } from 'uuid';
import { createNotice } from '@/app/utils/api';

import { FormData } from '@/types/notice';

import '../../styles/noticeWritePage.scss';

const Create = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    date: new Date(),
  });

  const { title, content, date } = formData;

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prevData) => ({
      ...prevData,
      content,
    }));
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      // TODO : 에러 핸들링 예정
      return;
    } else {
      const response = await createNotice({
        id: uuidv4(),
        title,
        date,
        content,
      });

      if (response.status === 200 || response.status === 201) {
        router.push('/notice');
      }
    }
  };

  const handleCancle = () => {
    const result = window.confirm('작성하던 것을 취소하겠습니까?');
    if (result) {
      router.push('/notice');
    }
  };

  return (
    <div className="notice-write-container">
      <h2 className="notice-heading">공지사항</h2>
      <div className="create-title">
        <textarea
          name="title"
          placeholder="제목"
          maxLength={100}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="create-date">
        <DateEditor startDate={date} onChange={handleDateChange} />
      </div>
      <Editor content={content} setContent={handleContentChange} />
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
