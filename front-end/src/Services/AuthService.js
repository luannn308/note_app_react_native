import * as request from "../Utils/request";

export const login = async (username, password) => {
    try {
        const data = { username: username, password: password };
        const res = await request.post("/user/login", data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const register = async (userNew) => {
    try {
        const res = await request.post("/user", userNew);
        return res;
    } catch (error) {
        console.log(error);
    }
};
