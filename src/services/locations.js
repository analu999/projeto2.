// src/services/locations.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL API
});

export async function fetchLocations() {
  try {
    const response = await api.get('/locais');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar locais:', error);
    throw error;
  }
}

export async function createLocation(data) {
  try {
    const response = await api.post('/locais', data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar local:', error);
    throw error;
  }
}

export async function updateLocation(id, data) {
  try {
    const response = await api.put(`/locais/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar local:', error);
    throw error;
  }
}

export async function deleteLocation(id) {
  try {
    const response = await api.delete(`/locais/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar local:', error);
    throw error;
  }
}