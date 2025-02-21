import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Scoreboard } from './components/Scoreboard'
import { Gameboard } from './components/Gameboard'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [selectedPokemonData, setSelectedPokemonData] = useState([])
  const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"

  async function getPokemonData(pokemonID) {
    try {
      const response = await fetch(`${POKEMON_URL}${pokemonID}`)
      const data = await response.json()
      const extractedData = {
        name: data.name,
        image: data.sprites.front_default
      }
      return extractedData
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  async function fetchMultiplePokemonData() {
    let pokemonArray = []
    const pokemonIds = new Set()
    while (pokemonIds.size < 25) {
      pokemonIds.add(Math.floor(Math.random() * 151) + 1)
    }
    for (const id of pokemonIds) {
      const data = await getPokemonData(id)
      if (data) {
        pokemonArray.push(data)
      }
    }
    setPokemonData(pokemonArray)
  }

  useEffect(() => {
    fetchMultiplePokemonData()
  }, [])  

  const handleCardClick = (pokemon) => {
    setSelectedPokemonData(selectedPokemon => {
      const selectedPokemonArray = [...selectedPokemon, pokemon]
      console.log(selectedPokemonArray)
      return selectedPokemonArray
    })
    fetchMultiplePokemonData();
};


  return (
    <div className='main-container'>
      <Header />
      <Scoreboard />
      <Gameboard pokemonArray={pokemonData} handleCardClick={handleCardClick}/>
      <Footer />
    </div>
  )
}
export default App
