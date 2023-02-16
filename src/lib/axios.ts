import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://habits-backend-production-06a4.up.railway.app/'
})