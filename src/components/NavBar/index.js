// Write your code here.
import './index.css'

const NavBar = props => {
  const {topscore, score, isGameIn} = props

  return (
    <nav className="nav-container">
      <div className="logo-score-container">
        <div className="logo-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">EmojiGame</h1>
        </div>
        <div>
          {isGameIn && (
            <div className="score-box">
              <p className="score">Score: {score}</p>
              <p>Top Score: {topscore}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
