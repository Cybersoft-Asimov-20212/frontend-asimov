import axios from "axios";

export default axios.create({
    baseURL: 'https://asimov-api-202102.azurewebsites.net/api/v1',
    headers: {'Content-type' : 'application/json'}
})