'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Button from '../../components/Button';
import { FormData } from '@/types/notice';

import { deleteNoticeItem, getNoticeItem } from '@/app/utils/api';

import '../../styles/noticeDetailPage.scss';
import 'react-quill/dist/quill.snow.css';

const DetailPage = ({
  params: { id },
}: {
  params: { id: string };
}): JSX.Element => {
  const [data, setData] = useState<FormData>({
    title: '',
    content: '',
    customDate: new Date(),
  });

  const router = useRouter();
  const path = usePathname();

  const { title, content, customDate } = data;

  useEffect(() => {
    getNoticeItem(id).then((noticeItemData) => {
      setData({
        ...noticeItemData,
        customDate: new Date(noticeItemData.customDate),
      });
    });
  }, []);

  const handleDelete = async () => {
    const response = await deleteNoticeItem(id);

    if (response.status === 200) {
      router.push('/notice');
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
          router.push(`${path}/modify`);
        }
      } else if (name === 'delete') {
        const result = window.confirm('정말 삭제하시겠습니까?');
        if (result) {
          handleDelete();
        }
      }
    }
  };

  return (
    <div className="notice-detail-page">
      <h2 className="detail-page-header">공지사항</h2>
      <div className="notice-detail-meta">
        <p className="title">{title}</p>
        <p className="created-at">{customDate.toLocaleString('ko-KR')}</p>
      </div>
      <div
        className="content ql-editor"
        dangerouslySetInnerHTML={{ __html: content }}
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
