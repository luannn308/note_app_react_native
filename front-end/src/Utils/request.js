import axios from "axios";

const request = axios.create({
  baseURL: "http://192.168.0.108:3000",
});
export const get = async (path, option = {}) => {
  const response = await request.get(path, option);
  return response.data;
};
export const post = async (path, option = {}) => {
  const response = await request.post(path, option);
  return response.data;
};
export default request;
