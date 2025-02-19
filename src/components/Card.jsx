import '../styles/Card.css'

export function MemoryCard({
    name, image
}) {
    return (
        <div className="memory-card">
            <img className="card-image" src={image} alt={name}/>
            <div className="card-text">{name}</div>
        </div>
    )
}