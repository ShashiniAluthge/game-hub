import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

interface Games{
    id:number,
    name:string
}

interface fetchGames{
    count:number,
    results:Games[]
}

const GameGrid = () => {

    const [games,setGames]=useState<Games[]>([]);
    const [error,setError]=useState('');

    useEffect(()=>{
        apiClient.get<fetchGames>('/games')
        .then(res=>setGames(res.data.results))
        .catch(error=>setError(error.message))
    })
  return (
    <div>
        {error && <text>{error}</text>}
   <ul>
    {games.map(game=>
        <li key={game.id}>{game.name}</li>
    )}
   </ul>
    </div>
  )
}

export default GameGrid