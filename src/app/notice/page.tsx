'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  getPaginatedNoticeList,
  getSearchNoticeItem,
  getTotalNoticeListCount,
} from '../utils/api';

import Input from '../components/Input';
import Table from '../components/Table';
import EmptyMessage from '../components/EmptyMessage';
import Pagination from '../components/Pagination';

import { ArrowButtons } from '@/types/button';

import '../styles/noticePage.scss';

const Notice = (): JSX.Element => {
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResultList, setSearchResultList] = useState([]);
  const [totalNoticeListCount, setTotalNoticeListCount] = useState(1);

  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  const countOfPages = Math.ceil(totalNoticeListCount / 10);

  useEffect(() => {
    getPaginatedNoticeList(page).then(setList);
    getTotalNoticeListCount().then(setTotalNoticeListCount);
  }, [page]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const handleClick = () => {
    getSearchNoticeItem(searchValue).then(setSearchResultList);
  };

  const handleClickPagination = (pageNumber: number) => {
    router.push(`/notice?page=${pageNumber}`);
  };

  const handleClickArrowButton = (buttonName: string) => {
    const arrowButtons: ArrowButtons = {
      prev() {
        if (page <= 1) {
          return;
        }

        router.push(`/notice?page=${page - 1}`);
      },

      prevGroup() {
        if (page <= 10) {
          return router.push('notice?page=1');
        }

        router.push(`notice?page=${page - 10}`);
      },
      next() {
        if (countOfPages === page) {
          return;
        }

        router.push(`notice?page=${page + 1}`);
      },
      nextGroup() {
        if (page <= 10) {
          return router.push(`notice?page=${countOfPages}`);
        }

        const nextGroupPage = page + 10;
        if (nextGroupPage > countOfPages) {
          return router.push(`notice?page=${countOfPages}`);
        }

        router.push(`notice?page=${nextGroupPage}`);
      },
    };

    arrowButtons[buttonName]();
  };

  return (
    <div className="notice-container">
      <div className="notice-header">
        <h2>공지사항</h2>
        <Input
          type="text"
          name="notice-search"
          placeholder="검색어"
          disabled={false}
          onChange={handleChange}
          onClick={handleClick}
          magnifier={true}
        />
      </div>
      {searchResultList.length ? (
        <Table noticeList={searchResultList} />
      ) : list.length ? (
        <Table noticeList={list} />
      ) : (
        <EmptyMessage message="공지사항이 없습니다." />
      )}
      <Pagination
        countOfPages={countOfPages}
        onClick={handleClickPagination}
        onClickArrow={handleClickArrowButton}
      />
    </div>
  );
};

export default Notice;
