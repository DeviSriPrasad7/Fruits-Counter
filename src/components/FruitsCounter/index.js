// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, speed: 0}

  mangoCounter = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  bananaCounter = () => {
    const {speed} = this.state
    this.setState(prevState => ({speed: prevState.speed + 1}))
  }

  render() {
    const {count, speed} = this.state

    return (
      <div className="fruits-container">
        <div className="below-fruits-container">
          <h1>
            Bob ate {count} mangoes {speed} bananas
          </h1>
          <div className="both-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="button" onClick={this.mangoCounter}>
                Eat mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button" onClick={this.bananaCounter}>
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
