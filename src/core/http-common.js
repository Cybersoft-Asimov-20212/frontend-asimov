import axios from "axios";
import authHeader from '@/services/auth-header'

export default axios.create({
    baseURL: 'https://appservice-webapp-totemcrew.azurewebsites.net/api/v1',
    headers: authHeader()
})