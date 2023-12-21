'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '../../components/Button';
import Editor from '../../components/Editor';
import DateEditor from '@/app/components/DateEditor';

import '../../styles/noticeWritePage.scss';

import { v4 as uuidv4 } from 'uuid';
import { createNotice } from '@/app/utils/api';

const Create = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());

  let id = uuidv4();

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      // TODO : 에러 핸들링 예정
      return;
    } else {
      const response = await createNotice({
        id,
        title,
        date: startDate.toLocaleDateString('ko-KR'),
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
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <div className="create-date">
        <DateEditor startDate={startDate} onChange={setStartDate} />
      </div>
      <Editor content={content} setContent={setContent} />
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
