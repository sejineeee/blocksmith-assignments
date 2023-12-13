'use client';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '../../components/Button';
import { Notice } from '@/types/notice';

import '../../styles/noticeDetailPage.scss';
import 'react-quill/dist/quill.snow.css';

const DetailPage = ({
  params: { id },
}: {
  params: { id: number };
}): JSX.Element => {
  const [data, setData] = useState<Notice>({
    id: '',
    title: '',
    date: '',
    content: '',
  });

  const router = useRouter();

  const getNoticeItem = async () => {
    try {
      const response = await axios.get(`http://localhost:9999/notice/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNoticeItem();
  }, []);

  const deleteData = async () => {
    try {
      const response = await axios.delete(`http://localhost:9999/notice/${id}`);
      router.push('/notice');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { target } = e;

    if (target instanceof HTMLButtonElement) {
      const { name } = target;

      if (name === 'list-view') {
        router.push('/notice');
      } else if (name === 'modify') {
        const result = window.confirm('내용을 수정하시겠습니까?');
        if (result) {
          router.push('/modify');
        }
      } else if (name === 'delete') {
        const result = window.confirm('정말 삭제하시겠습니까?');
        if (result) {
          deleteData();
        }
      }
    }
  };

  return (
    <div className="notice-detail-page">
      <h2 className="detail-page-header">공지사항</h2>
      <div className="notice-detail-meta">
        <p className="title">{data.title}</p>
        <p className="created-at">{data.date}</p>
      </div>
      <div
        className="content ql-editor"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      <div className="buttons">
        <Button
          type="button"
          name="list-view"
          content="목록으로"
          disabled={false}
          onClick={handleClick}
        />
        <Button
          type="button"
          name="modify"
          content="수정"
          disabled={false}
          onClick={handleClick}
        />
        <Button
          type="button"
          name="delete"
          content="삭제"
          disabled={false}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default DetailPage;
