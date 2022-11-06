import axios from 'axios'
import { useState } from 'react';
import { Task } from '../types/user';


export const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const getApi = await api.get('/tasks')

export const useApi = () => ({
    addTask: async (title: string, description: string) => {
        const response = await api.post('/tasks', {title, description})
        return response.data
    },

    ApiTask: async () => {
        const response = await api.get('/tasks')
        
       
        return response.data
    },
})


