import '../styles/ResultDisplay.css'

export function ResultDisplay({
    score
}) {
    return (
        <div className='content-blocker'>
            <div className="result-container">
                <h1 className="result-text">Game Over!</h1>
                <div className="result-score">Score: {score}</div>
                <button className="play-again">Play Again?</button>
            </div>
        </div>
    )
}