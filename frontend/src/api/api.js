import { customAxios } from "./customAxios";
const getLogs = async () => {
  try {
      const response = await customAxios.get('/');
      return response.data;
  } catch (error) {
      console.error('Error during getLogs call', error);
      throw error;
  }
}

export default {
  getLogs,
};
