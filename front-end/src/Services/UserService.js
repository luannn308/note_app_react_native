import * as request from "../Utils/request";

export const getUserDetail = async (token) => {
    try {
        const res = await request.get("/user/detail", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    } catch (error) {
        console.error("Error fetching notes:", error.message);
        return null;
    }
};
