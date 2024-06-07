import axios, { AxiosRequestConfig } from 'axios';

//http://192.168.68.151:8080 mac mobile
//http://localhost:8080 web
const BASE_URL = "http://localhost:8080/"

export class ApiService {
    private async request<R>(config: AxiosRequestConfig): Promise<R> {
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    async get<R>(endpoint: string): Promise<R> {
        const url = `${BASE_URL}${endpoint}`;
        const config: AxiosRequestConfig = {
            method: 'GET',
            url,
        };
        return this.request<R>(config);
    }

    async post<R, B>(endpoint: string, body?: B): Promise<R> {
        const url = `${BASE_URL}${endpoint}`;
        const config: AxiosRequestConfig = {
            method: 'POST',
            url,
            data: body,
        };
        return this.request<R>(config);
    }

    async put<R, B>(endpoint: string, body?: B): Promise<R> {
        const url = `${BASE_URL}${endpoint}`;
        const config: AxiosRequestConfig = {
            method: 'PUT',
            url,
            data: body,
        };
        return this.request<R>(config);
    }

    async delete<R>(endpoint: string): Promise<R> {
        const url = `${BASE_URL}${endpoint}`;
        const config: AxiosRequestConfig = {
            method: 'DELETE',
            url,
        };
        return this.request<R>(config);
    }
}