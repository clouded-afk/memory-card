import '../styles/ResultDisplay.css'

export function ResultDisplay({
    score,
    handlePlayAgain
}) {
    return (
        <div className='content-blocker'>
            <div className="result-container">
                <h1 className="result-text">Game Over!</h1>
                <div className="result-score">Score: {score}</div>
                <button className="play-again" onClick={handlePlayAgain}>Play Again?</button>
            </div>
        </div>
    )
}