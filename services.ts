// services.ts
import axios, { AxiosError, AxiosResponse } from 'axios';

interface APIResponse {
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
}

const apiCall = async (endpoint: string, method: 'get' | 'post' | 'put' | 'delete', data?: any): Promise<APIResponse> => {
  try {
    console.log("############")
    console.log(`${process.env.API}${endpoint}`)
    console.log(data)
    console.log("############")
    const response: AxiosResponse = await axios({
      method,
      url: `${process.env.API}${endpoint}`,
      data,
    });
    return { success: true, data: response.data };
  } catch (error: any | AxiosError) {
    console.error('API call error:', error.message);
    console.error(error.config)
    console.log(error)
    return { success: false, error: error.message, message: error.response.data };
  }
};

const calculateHMAC = async () => {
  
}

export { apiCall };