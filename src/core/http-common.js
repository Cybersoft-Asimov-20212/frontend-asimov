import axios from "axios";
import authHeader from '@/services/auth-header'

export default axios.create({
    baseURL: 'https://asimov-api-202102.azurewebsites.net/api/v1',
    headers: authHeader()
})