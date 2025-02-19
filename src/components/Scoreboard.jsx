import '../styles/Scoreboard.css'

export function Scoreboard({
    currentScore,
    bestScore
}) {
    return (
        <div className="scoreboard-container">
            <div className="current-score">Current Score: {currentScore}</div>
            <div className="best-score">Best Score: {bestScore}</div>
        </div>
    )
}