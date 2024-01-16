'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getNoticeItem, updateNoticeItem } from '@/app/utils/api';

import Button from '@/app/components/Button';
import Editor from '@/app/components/Editor';
import DateEditor from '@/app/components/DateEditor';

import { FormData } from '@/types/notice';

import '../../../styles/noticeWritePage.scss';

const Modify = ({
  params: { id },
}: {
  params: { id: string };
}): JSX.Element => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    customDate: new Date(),
  });

  const { title, customDate, content } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (changeDate: Date) => {
    setFormData((prevData) => ({
      ...prevData,
      customDate: changeDate,
    }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prevData) => ({
      ...prevData,
      content,
    }));
  };

  const handleCancle = () => {
    const result = window.confirm('작성하던 것을 취소하겠습니까?');
    if (result) {
      router.back();
    }
  };

  const handleSubmit = async () => {
    const contentWithoutTags = content.replace(/<\/?[^>]+(>|$)/g, '').trim();

    if (!title || !contentWithoutTags) {
      // TODO : 에러 핸들링 예정
      return;
    }

    try {
      const response = await updateNoticeItem(id, formData);

      if (response.status === 200) {
        router.push(`/notice/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNoticeItem(id).then(({ title, content, customDate }) => {
      setFormData({
        title,
        content,
        customDate: new Date(customDate),
      });
    });
  }, []);

  return (
    <div className="notice-write-container">
      <h2 className="notice-heading">공지사항</h2>
      <div className="create-title">
        <textarea
          name="title"
          placeholder="제목"
          maxLength={100}
          value={title}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="create-date">
        <DateEditor startDate={customDate} onChange={handleDateChange} />
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

export default Modify;
