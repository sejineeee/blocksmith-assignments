import axios from 'axios';

import { FormData } from '@/types/notice';

export const getNoticeList = async () => {
  try {
    const response = await axios.get('/api/notice');

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createNotice = async ({
  title,
  customDate,
  content,
}: FormData) => {
  const response = await axios.post(
    `/api/notice`,
    { title, customDate, content },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const getNoticeItem = async (id: string) => {
  try {
    const response = await axios.get(`/api/notice/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateNoticeItem = async (id: string, data: FormData) => {
  const response = await axios.patch(`/api/notice/${id}`, data);

  return response;
};

export const deleteNoticeItem = async (id: string) => {
  try {
    const response = await axios.delete(`/api/notice/${id}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchNoticeItem = async (searchValue: string) => {
  try {
    const response = await axios.get(`/api/notice?value=${searchValue}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
