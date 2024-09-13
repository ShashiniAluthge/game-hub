import useData from "./useData";
import { Genre } from "./useGenres";

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
const useGames = (selectedGenre: Genre | null) =>
  useData<Games>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
