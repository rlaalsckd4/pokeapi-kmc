import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Favorite from "../pages/Favorite"
import FavoriteBtn from "./FavoriteBtn"
import FlipCard from "./FlipCard"
import { memo, useState } from "react"

const CardContainer = styled.section`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    border-bottom: 5px solid black;
    border-right: 5px solid black;

    img{
        width: 120px;
    }
`


export const Card = memo(({ pokemon }) => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            {isLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">로딩중....</div> : null}
            <img onLoad={() => setIsLoading(false)} src={pokemon.front} style={{ display: isLoading ? 'none' : 'block' }} />
            <div>{pokemon.name}
                <FavoriteBtn pokemonId={pokemon.id} />
            </div>
        </CardContainer>
    )
})