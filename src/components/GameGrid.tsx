import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";


const GameGrid = () => {
const {games,error}=useGames();
  return (
    <div>
        {error && <text>{error}</text>}
   <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3}} spacing={10} padding={'10px'}>
    {games.map(game=>
       <GameCard key={game.id}game={game}/>
    )}
   </SimpleGrid>
    </div>
  )
}

export default GameGrid