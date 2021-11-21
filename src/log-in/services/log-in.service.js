import axios from 'axios';
const API_URL = 'https://localhost:5001/auth/';

class AuthService {
    login(user) {
        return axios.post(API_URL + 'sign-in', {
            email: user.email,
            password: user.password
        })
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'sign-up', {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            password: user.password,
            phone: user.phone
        });
    }

}
export default new AuthService();