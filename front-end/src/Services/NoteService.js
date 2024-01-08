import * as request from "../Utils/request";

export const getNoteByUser = async (token) => {
    try {
        const response = await request.get("/note/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Error fetching notes:", error.message);
        return null;
    }
};

export const addNote = async (token, note) => {
    try {
        const requestBody = {
            body: {
                title: note.title,
                content: note.content,
                important: note.important,
                sharedWith: note.sharedWith,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await request.postNote("/note", requestBody);
        return response;
    } catch (error) {
        return null;
    }
};
export const editNote = async (token, note) => {
    try {
        const requestBody = {
            body: {
                ...note,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await request.postNote("/note/edit", requestBody);
        return response;
    } catch (error) {
        return null;
    }
};
export const getNoteById = async (id) => {
    try {
        const response = await request.get(`/note/${id}`);
        return response;
    } catch (error) {
        return null;
    }
};

export const getListShareWith = async (token) => {
    try {
        const response = await request.get(`/note/share/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return null;
    }
};
export const searchNotes = async (token, query) => {
    try {
        const response = await request.get(`/note/search/${query}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return null;
    }
};

export const deleteNote = async (token, id) => {
    try {
        const response = await request.deleteNote(`/note/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return null;
    }
};
