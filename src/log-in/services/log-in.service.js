import axios from 'axios';
const API_URL = 'https://localhost:5001/auth/';

class AuthService {
    login(user, typeU) {
        return axios.post(API_URL + 'sign-in/' + typeU, {
            email: user.email,
            password: user.password
        })
    }

    register(user, typeU) {
        return axios.post(API_URL + 'sign-up/' + typeU, {
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