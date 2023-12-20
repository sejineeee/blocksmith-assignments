'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getNoticeItem, updateNoticeItem } from '@/app/utils/api';

import Button from '@/app/components/Button';
import Editor from '@/app/components/Editor';

import { Notice } from '@/types/notice';

const Modify = ({
  params: { id },
}: {
  params: { id: string };
}): JSX.Element => {
  const router = useRouter();

  const [data, setData] = useState<Notice>({
    id: '',
    title: '',
    date: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleQuillEdit = (value: string) => {
    setData((prev) => {
      return {
        ...prev,
        content: value,
      };
    });
  };
  const handleCancle = () => {
    const result = window.confirm('작성하던 것을 취소하겠습니까?');
    if (result) {
      router.back();
    }
  };

  const handleSubmit = () => {
    updateNoticeItem(id, data);

    router.push(`http://localhost:3000/notice/${id}`);
  };

  useEffect(() => {
    getNoticeItem(id).then(setData);
  }, []);

  return (
    <div className="notice-write-container">
      <h2 className="notice-heading">공지사항</h2>
      <div className="create-title">
        <textarea
          name="title"
          placeholder="제목"
          maxLength={100}
          value={data.title}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="create-date">{/* <p>{date}</p> */}</div>
      <Editor content={data.content} setContent={handleQuillEdit} />
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

export default Modify;
