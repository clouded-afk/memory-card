import '../styles/Header.css'

export function Header() {
    return (
        <div className="header">
            <h1 className='page-header'>Pokemon Memory Game</h1>
            <div className='rules-container'>
                <h2 className='rules-header'>Rules</h2>
                <div className='line-divider'></div>
                <ul>
                    <li>Click on a Pokemon to score a Point!</li>
                    <li>Click on a new Pokemon after each shuffle to keep increasing you score!</li>
                    <li>When you click a Pokemon that you have clicked before the game ends, Good Luck!</li>
                </ul>
            </div>
        </div>
    )
}