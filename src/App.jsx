import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Scoreboard } from './components/Scoreboard'
import { Gameboard } from './components/Gameboard'
import { MemoryCard } from './components/Card'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState({})
  const randomID = Math.floor(Math.random() * 1025) + 1
  const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/"

  useEffect(() => {
    async function getPokemonData(pokemonID) {
      try {
        const response = await fetch(`${POKEMON_URL}${pokemonID}`)
        const data = await response.json()
        const extractedData = {
          name: data.name,
          image: data.sprites.front_default
        }
        setPokemonData(extractedData)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    getPokemonData(randomID)
  }, [])  

  return (
    <div className='main-container'>
      <Header />
      <Scoreboard />
      <MemoryCard name={pokemonData.name} image={pokemonData.image}/>
      <Footer />
    </div>
  )
}
export default App
