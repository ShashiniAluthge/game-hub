import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenres";
// import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props{
    gameQuery:GameQuery;
    // selectedGenre:Genre|null,
    // selectedPlatform:Platform|null,
}

const GameGrid = ({gameQuery}:Props) => {
const {data,error,isLoading}=useGames(gameQuery);
const skeletons = [1,2,3,4,5]
  return (
    <div>
        {error && <text>{error}</text>}
   <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={4} padding={'10px'}>
    {isLoading && skeletons.map(skeleton=>(
        <GameCardContainer  key={skeleton}>
        <GameCardSkeleton/>
        </GameCardContainer>
        ))}
    {data.map(game=>
    <GameCardContainer key={game.id}>
       <GameCard game={game}/>
       </GameCardContainer>
    )}
   </SimpleGrid>
    </div>
  )
}

export default GameGrid