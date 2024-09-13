import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface platforms{
    id:number,
    name:string,
    slug:string
}

export interface Games{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:platforms}[],
    metacritic:number,

}

interface fetchGames{
    count:number,
    results:Games[]
}

const useGames = ()=>{
    
    const [games,setGames]=useState<Games[]>([]);
    const [error,setError]=useState('');

    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<fetchGames>('/games',{signal:controller.signal})
        .then(res=>setGames(res.data.results))
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setError(error.message)
        })

        return ()=>controller.abort();
    },[])
    return {games,error}
}

export default useGames