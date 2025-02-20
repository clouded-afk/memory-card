import { MemoryCard } from './Card'
import '../styles/Gameboard.css'

export function Gameboard({
    pokemonArray
}) {
    return (
        <div className="gameboard-container">
            {pokemonArray.map((pokemon, index) => (
                <MemoryCard key={index} name={pokemon.name} image={pokemon.image} />
            ))}
        </div>
    )
}