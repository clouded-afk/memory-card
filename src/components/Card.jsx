import '../styles/Card.css'

export function MemoryCard({
    name, 
    image,
    onClick
}) {
    return (
        <div className="memory-card" onClick={() => onClick(name)}>
            <img className="card-image" src={image} alt={name}/>
            <div className="card-text">{name}</div>
        </div>
    )
}