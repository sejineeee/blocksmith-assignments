import axios from 'axios';

export const getNoticeList = async () => {
  try {
    const response = await axios.get('http://localhost:9999/notice');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
