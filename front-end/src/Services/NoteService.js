import * as request from "../Utils/request";

export const getNoteByUser = async (token) => {
    try {
        const response = await request.get("/note/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching notes:", error.message);
        return null;
    }
};
