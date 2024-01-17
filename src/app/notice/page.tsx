'use client';

import { useEffect, useState } from 'react';

import { getNoticeList, getSearchNoticeItem } from '../utils/api';

import Input from '../components/Input';
import Table from '../components/Table';
import EmptyMessage from '../components/EmptyMessage';

import '../styles/noticePage.scss';

const Notice = (): JSX.Element => {
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResultList, setSearchResultList] = useState([]);

  useEffect(() => {
    getNoticeList().then(setList);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const handleClick = () => {
    getSearchNoticeItem(searchValue).then(setSearchResultList);
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
    </div>
  );
};

export default Notice;
