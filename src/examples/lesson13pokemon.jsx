
/**
 *
 * Task 1.
 * Lets do some set up
 * 1. We need to hold the state of the pokemon in the players hand,
 * it should be an array of numbers
 * 2. Create a new component for rendering cards,
 * it should take an id as a prop only and display that id in a h1
 * 3. Render a Pokemon Card component for each pokemon held
 * 4. test your code by iniializing the state of the pokemon held to be [1]
 *
 * Task 2.
 * Get the details of the pokemon held so that we can make a pokemon card
 * 1. Within the pokemon card component, we should hold the state of the pokemon's details,
 * but we dont have them yet
 * 2. Make a useState that runs each time the id prop changes
 * 3. Within the useEffect, we need to make a fetch call to the pokemon api, the address is https://pokeapi.co/api/v2/pokemon/
 * followed by the id of the pokemon you want the details of
 * 4. Set the returned data to the details state
 * 5. render the name of the pokemon in the card instead of the id
 *
 * Task 3.
 * We want a button for picking up cards
 * 1. Make a button that on click adds a number to the array of ids
 * 2. make sure that a new card is generated
 *
 *
 * Bonus tasks
 * 1. add an image using the image url within the data returned from the api,
 * You can find a list of images under the sprites key
 * 2. make the get new card button add a random number whole number to a maximum of 151
 * 3. allow player to only have a maximum of 6 pokemon in their hand
 * 4. using the information from the docs at https://pokeapi.co/ all a user to choose
 * which pokemon type they get.
 * Be aware that you might need to make multieple calls to find out the number of pokemon
 * available per type.
 * 5. Add a buton that allows the player to evolve thier pokemon using the evolution call on the api
 *  you can find details on the docs here: https://pokeapi.co/docs/v2#evolution-section
 *
 */

import { useEffect, useState } from "react"

function PokeCard({url}) {

    const [name, setName] = useState("")
    const [spriteUrl, setSpriteUrl] = useState("")
    const [stats, setStats] = useState([])


    const fetchPokemonData = async (url) => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                console.error("Response was not ok!")

            } else {
                const {name, sprites: { front_default }, stats} = await response.json()
                setName(name)
                setSpriteUrl(front_default)
                setStats(stats)
                
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(
        () => {
            fetchPokemonData(url)  
        }
        , [url]
    )
    

    return <div>
        <h3>{name}</h3>
        <img src={spriteUrl} />
        <ul>
            {stats && stats.map((stat) => <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>)}
        </ul>
    </div>
}

function Pokedex() {
    
    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = async () => {
        const URL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
        try {
            const response = await fetch(URL)
            if (!response.ok) {
                console.error("Response was not ok!")

            } else {
                const {results} = await response.json()
                setPokemon(results)
                //console.log("pokemon data", data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(
        () => {
            fetchPokemon();
        }
    , [])

    return <>
        <h1>Pokedex</h1>
        <ul>
            {pokemon && pokemon.map(monster => <li key={monster.name}><PokeCard url={monster.url} /></li>)}
        </ul>
    </>
}

export default Pokedex