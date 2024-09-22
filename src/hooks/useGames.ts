import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { fetchResponse } from "../services/api-client";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platforms }[];
  metacritic: number;
  rating_top:number
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<fetchResponse<Games>,Error>({
    queryKey:['games',gameQuery],
    queryFn:()=>
      apiClient.get<fetchResponse<Games>>('/games',{
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
      .then(res=>res.data)
  })


export default useGames;
