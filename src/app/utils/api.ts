import { Notice } from '@/types/notice';
import axios from 'axios';

export const getNoticeList = async () => {
  try {
    const response = await axios.get('http://localhost:9999/notice');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createNotice = async ({ id, title, date, content }: Notice) => {
  try {
    const response = await axios.post(
      `http://localhost:9999/notice/`,
      {
        id,
        title,
        date,
        content,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getNoticeItem = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:9999/notice/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateNoticeItem = async (id: string, data: Notice) => {
  try {
    const response = await axios.patch(
      `http://localhost:9999/notice/${id}`,
      data
    );
  } catch (error) {
    console.error(error);
  }
};
