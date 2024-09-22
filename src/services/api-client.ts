import axios, { AxiosRequestConfig } from "axios"

export interface fetchResponse<T> {
    count: number;
    next:string | null;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'94b84c0f9d2841fc9369674f753f8eff'
    }
})

class APIClient<T> {
    endpoint:string

    constructor (endpoint:string){
        this.endpoint=endpoint
    }

    getAll = (config:AxiosRequestConfig)=>{
        return axiosInstance
        .get<fetchResponse<T>>(this.endpoint,config)
        .then(res=>res.data)
    }
}

export default APIClient