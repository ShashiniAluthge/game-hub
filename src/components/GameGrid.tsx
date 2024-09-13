import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
const {data,error,isLoading}=useGames();
const skeletons = [1,2,3,4,5]
  return (
    <div>
        {error && <text>{error}</text>}
   <SimpleGrid columns={{sm:1,md:2,lg:2,xl:3}} spacing={10} padding={'10px'}>
    {isLoading && skeletons.map(skeleton=>(
        <GameCardContainer>
        <GameCardSkeleton key={skeleton}/>
        </GameCardContainer>
        ))}
    {data.map(game=>
    <GameCardContainer>
       <GameCard key={game.id}game={game}/>
       </GameCardContainer>
    )}
   </SimpleGrid>
    </div>
  )
}

export default GameGrid