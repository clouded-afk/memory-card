import { MemoryCard } from './Card'
import '../styles/Gameboard.css'

export function Gameboard({
    name,
    image
}) {
    return (
        <div className="gameboard-container">
            <MemoryCard name={name} image={image} />
        </div>
    )
}