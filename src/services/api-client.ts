import axios from "axios"

export interface fetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'94b84c0f9d2841fc9369674f753f8eff'
    }
})