// frontend/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Thay đổi thành địa chỉ của API Django
});

export default instance;
