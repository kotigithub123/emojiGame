// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, Score, reset} = props

  const gameStatus = isWon ? 'You Win' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const image = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="card-container">
      <div className="color">
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p className="score-color">{Score}/12</p>
        <button className="playButton" type="button" onClick={reset}>
          Play Again
        </button>
      </div>
      <div>
        <img src={image} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
