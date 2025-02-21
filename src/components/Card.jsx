import '../styles/Card.css'

export function MemoryCard({
    name, 
    image,
    handleCardClick
}) {
    return (
        <div className="memory-card" onClick={() => handleCardClick(name)}>
            <img className="card-image" src={image} alt={name}/>
            <div className="card-text">{name}</div>
        </div>
    )
}