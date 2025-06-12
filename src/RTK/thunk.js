import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
    'pokemon/fetchMultiplePokemonById',
    async (maxPokemonId) => {
        const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1)
        console.log(numberArray)

        const fetchAPI = async (pokemonID) => {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
            const data = await response.json()

            const pokemonData = {
                id: pokemonID,
                name: data.names.find(el => el.language.name === 'ko').name,

                description: data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,

                front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`,

                back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonID}.png`
            }
            return pokemonData
        }

        return await Promise.all(numberArray.map((el) => fetchAPI(el)))

    }
)