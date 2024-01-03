import axios from 'axios';

import { Notice, FormData } from '@/types/notice';

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
  try {
    const response = await axios.post(
      `/api/notice`,
      {
        title,
        customDate,
        content,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
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
  try {
    const response = await axios.patch(`/api/notice/${id}`, data);
  } catch (error) {
    console.error(error);
  }
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
