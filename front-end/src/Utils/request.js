import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:3000",
});
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};
export const post = async (path, option = {}) => {
    const response = await request.post(path, option);
    return response.data;
};
export const postNote = async (path, { body, headers } = {}) => {
    const response = await request.post(path, body, {
        headers: {
            ...headers,
        },
    });
    return response.data;
};
export const deleteNote = async (path, option = {}) => {
    const response = await request.delete(path, option);
    return response.data;
};
export default request;
