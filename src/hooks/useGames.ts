import useData from "./useData"

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
const useGames =()=>useData<Games>('/games')

export default useGames