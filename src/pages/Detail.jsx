import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteBtn from "../component/FavoriteBtn"
import FlipCard from "../component/FlipCard"

export default function Detail() {
    const { pokemonId } = useParams()
    const pokemon = useSelector(selectPokemonById(Number
        (pokemonId)))

    return (<div className="bg-[white] flex flex-col justify-center 
    items-center border py-[30px] px-[60px] rounded-
    [10px] border-b-[10px] border-r-[10px] border-black">
        <div className="text-[20px] mb-[10px]">{pokemon.name}
            <FavoriteBtn pokemonId={Number(pokemonId)} />
        </div>
        <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>)
}