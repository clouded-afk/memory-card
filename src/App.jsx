import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Scoreboard } from './components/Scoreboard'
import { Gameboard } from './components/Gameboard'
import { Footer } from './components/Footer'
import { ResultDisplay } from './components/ResultDisplay'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [selectedPokemonData, setSelectedPokemonData] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState('')
  const [previousScore, setPreviousScore] = useState('')
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
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
    console.log(currentPokemon)
  }, [currentPokemon])

  const handleCardClick = (pokemon) => {
    const resultsDisplay = document.querySelector(".content-blocker")
    if (selectedPokemonData.includes(pokemon)) {
      setPreviousScore(currentScore)
      resultsDisplay.style.display = "flex"
      setCurrentScore(0)
      setSelectedPokemonData([])
      fetchMultiplePokemonData()
    } else {
      setCurrentPokemon(pokemon)
      setSelectedPokemonData(selectedPokemon => {
        const selectedPokemonArray = [...selectedPokemon, pokemon]
        console.log(selectedPokemonArray)
        return selectedPokemonArray
      })
      handleScore()
    }
  } 

  const handleScore = () => {
    setCurrentScore(currentScore + 1)
    if (currentScore >= bestScore) {
      setBestScore(currentScore + 1)
    }
  }

  const handlePlayAgain = () => {
    const resultsDisplay = document.querySelector(".content-blocker")
    resultsDisplay.style.display = "none"
  }

  return (
    <div className='main-container'>
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <Gameboard pokemonArray={pokemonData} handleCardClick={handleCardClick}/>
      <Footer />
      <ResultDisplay score={previousScore} handlePlayAgain={handlePlayAgain}/>
    </div>
  )
}
export default App
