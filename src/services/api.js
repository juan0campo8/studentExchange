import Axios from "axios";

const baseUrl = "http://localhost:8080";


export const authenticate = async (username, password) => {
    try {

        const token = await Axios.get(`${baseUrl}/authenticate`, {
            auth: { username, password },
            withCredentials: true
        });
        return token;
    } catch (e) {
        console.log(e);
        return null;
    }
};

export const createUser = async (username, password) => {
    try {
        const options = {
            auth: {
                username: username,
                password: password,
                cart: []
            }
        }
        return await Axios.post(`${baseUrl}/users`, {}, options);
    } catch (e) {
        console.log(e);
    }
}