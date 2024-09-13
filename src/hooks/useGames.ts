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
    const [isLoading,setLoading]= useState(false);

    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<fetchGames>('/games',{signal:controller.signal})
        .then(res=>{
            setGames(res.data.results),
            setLoading(false);
        })
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setError(error.message);
            setLoading(false);
        })

        return ()=>controller.abort();
    },[])
    return {games,error,isLoading}
}

export default useGames