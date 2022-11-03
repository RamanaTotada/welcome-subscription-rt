import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscription = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading-1">Welcome</h1>
        <h1 className="heading-2">Thank you! Happy Learning</h1>

        <button
          type="button"
          className="button-style"
          onClick={this.onSubscription}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
