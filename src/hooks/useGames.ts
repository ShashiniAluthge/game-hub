import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { fetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Games } from "../entities/Games";

const apiClient = new APIClient<Games>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore(s=>s.gameQuery)

  return useInfiniteQuery<fetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
