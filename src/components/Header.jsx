export function Header() {
    return (
        <div className="header">
            <h1>Pokemon Memory Game</h1>
            <ul>Rules:
                <li>Click on a Pokemon to score a Point!</li>
                <li>Click on a new Pokemon after each shuffle to keep increasing you score!</li>
                <li>When you click a Pokemon that you have clicked before the game ends, Good Luck!</li>
            </ul>
        </div>
    )
}