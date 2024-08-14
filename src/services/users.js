// src/services/users.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL API
});

export async function fetchUsers() {
  try {
    const response = await api.get('/usuarios');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}

export async function addUser(data) {
  try {
    const response = await api.post('/usuarios', data);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
}