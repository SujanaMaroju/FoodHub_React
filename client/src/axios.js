import axios from 'axios';

const instance = axios.create({
    baseURL:"https://foodhub-ujp8.onrender.com/"
});

export default instance;