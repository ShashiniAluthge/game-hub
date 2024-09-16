import { GameQuery } from "../App";
import useData from "./useData";


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
}
const useGames = (
    gameQuery:GameQuery
//   selectedGenre: Genre | null,
//   selectedPlatform: Platform | null
) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
