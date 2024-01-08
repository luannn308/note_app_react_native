import * as request from "../Utils/request";

export const getListUsers = async () => {
    try {
        const res = await request.get("/user");
        return res;
    } catch (error) {
        return null;
    }
};
export const getUserDetail = async (token) => {
    try {
        const res = await request.get("/user/detail", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    } catch (error) {
        return null;
    }
};
export const getUserByEmail = async (email) => {
    try {
        const response = await request.get(`/user/${email}`);
        return response;
    } catch (error) {
        return null;
    }
};
export const getUserById = async (id) => {
    try {
        const response = await request.get(`/user/detail/${id}`);
        return response;
    } catch (error) {
        return null;
    }
};
