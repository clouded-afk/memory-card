import { MemoryCard } from './Card'
import '../styles/Gameboard.css'

export function Gameboard({
    pokemonArray,
    handleCardClick
}) {
    return (
        <div className="gameboard-container">
            {pokemonArray.map((pokemon, index) => (
                <MemoryCard key={index} name={pokemon.name} image={pokemon.image} onClick={handleCardClick}/>
            ))}
        </div>
    )
}