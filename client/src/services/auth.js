import api from "./api";
import TokenService from "./token";

// import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    login({ username, password }) {
        return api
            .post("/auth/signin", {
                username,
                password
            })
            .then((response) => {
                if (response.data.accessToken) {
                    TokenService.setUser(response.data);
                }

                return response.data;
            });
    }

    logout() {
        TokenService.removeUser();
    }

    register({ username, email, password }) {
        return api.post("/auth/signup", {
            username,
            email,
            password
        });
    }
    // login(user) {
    //     return axios
    //         .post(API_URL + 'signin', {
    //             username: user.username,
    //             password: user.password
    //         })
    //         .then(response => {
    //
    //             if (response.data.accessToken) {
    //                 localStorage.setItem('user', JSON.stringify(response.data));
    //             }
    //
    //             return response.data;
    //         });
    // }
    //
    // logout() {
    //     localStorage.removeItem('user');
    // }
    //
    // register(user) {
    //     return axios.post(API_URL + 'signup', {
    //         username: user.username,
    //         email: user.email,
    //         password: user.password
    //     });
    // }


}

export default new AuthService();
