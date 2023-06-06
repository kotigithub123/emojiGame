/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {Topscore: 0, isGameIn: true, emojiListContainer: []}

  reSetGame = () => {
    this.setState({isGameIn: true, emojiListContainer: []})
  }

  renderCardList = () => {
    const {emojisList} = this.props
    const {emojiListContainer} = this.state
    const isWon = emojisList.length === emojiListContainer.length
    return (
      <div>
        <WinOrLoseCard
          isWon={isWon}
          Score={emojiListContainer.length}
          reset={this.reSetGame}
        />
      </div>
    )
  }

  getFinshedTheGame = currentScore => {
    const {Topscore} = this.state
    let newTopscore = Topscore
    if (currentScore > Topscore) {
      newTopscore = currentScore
    }
    this.setState({Topscore: newTopscore, isGameIn: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {emojiListContainer} = this.state
    const emojiListLength = emojiListContainer.length
    const isClicked = emojiListContainer.includes(id)

    if (isClicked) {
      this.getFinshedTheGame(emojiListLength)
    } else {
      if (emojisList.length - 1 === emojiListLength) {
        this.getFinshedTheGame(emojiListLength)
      }
      this.setState(prevState => ({
        emojiListContainer: [...prevState.emojiListContainer, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="unorderd-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {Topscore, isGameIn, emojiListContainer} = this.state

    return (
      <div className="bg-container">
        <div>
          <NavBar
            topscore={Topscore}
            score={emojiListContainer.length}
            isGameIn={isGameIn}
          />
        </div>
        <div>{isGameIn ? this.renderEmojiList() : this.renderCardList()}</div>
      </div>
    )
  }
}

export default EmojiGame
