import axios, { AxiosInstance } from "axios"

export const BASE_URL= 'https://rickandmortyapi.com/api';

export const myAxios = axios.create({
    baseURL: BASE_URL
})