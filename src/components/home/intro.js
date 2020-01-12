import React from "react"
import "../../styles/home/intro.scss"
import { PressMeToasts } from "../../components/home/pressmetoasts"
import Confetti from "react-confetti"
import PropTypes from "prop-types"

export class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num_of_clicks: 0,
      toast_show: false,
      dict_check: 1, // controls type of h1
      confetti: false,
      gravity: 0.3, // gravity of confetti
      finalpress: 1, // final message toast control
      isHome: true,
    }
    this.finalpresscheck = true
    this.press_dictionary = [
      "",
      "Hello there.",
      "You can call me Avi!",
      "Uh, this button is useless.",
      "Click somewhere else!",
      "Stop. What are you trying to do?",
      "Fine, you win.",
      "I baked you a winner's cake.",
      "It's delicious, I promise.",
      "Initiating cake in 3... 2... 1...",
      "THERE IS NO CAKE",
    ]

    this.dontPressMe = this.dontPressMe.bind(this)
    this.startConfetti = this.startConfetti.bind(this)
  }

  // Toast Controller
  // Changes the gravity for infinite confetti
  dontPressMe() {
    if (this.state.num_of_clicks < 8)
      this.setState({
        num_of_clicks: this.state.num_of_clicks + 1,
        toast_show: true,
      })

    if (this.state.num_of_clicks === 8)
      this.setState({
        dict_check: 2,
        num_of_clicks: this.state.num_of_clicks + 1,
        toast_show: true,
      })

    if (this.state.num_of_clicks >= 10)
      this.setState(() => ({
        confetti: !this.state.confetti,
        gravity: 0.25,
      }))
  }

  // Bootstrap Toast autohide function
  closeToast() {
    this.setState({
      toast_show: false,
    })
  }

  // Wait 3 seconds, then start the confetti
  startConfetti() {
    setTimeout(() => {
      this.setState(() => ({
        dict_check: 3,
        num_of_clicks: this.state.num_of_clicks + 1,
        toast_show: true,
        finalpress: 3,
      }))
    }, 3000)
  }

  // Wait 3 seconds, then reveal that the cake was a liE
  componentDidUpdate(prevProps, prevState) {
    if (this.state.num_of_clicks === 10 && this.finalpresscheck)
      setTimeout(() => {
        this.finalpresscheck = false
        this.setState(() => ({
          toast_show: true,
          finalpress: 2,
        }))
      }, 3000)
  }

  componentWillMount() {
    if (window.location.pathname !== "/") this.setState({ isHome: false })
  }

  componentDidMount() {
    let button_list = document.querySelectorAll(".each-btn")
    for (var i = 0; i < button_list.length; ++i)
      button_list[i].addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (window.location.pathname !== "/")
              this.setState({ isHome: false })
          })
        },
        true
      )
  }

  render() {
    let homeChecker = !this.state.isHome ? "not-home" : ""

    let headerType =
      this.state.dict_check === 2 ? (
        <h1 className="myname">Avishkar Kolahalu.</h1>
      ) : (
        <h1 className="myname" onClick={this.dontPressMe}>
          Avishkar Kolahalu.
        </h1>
      )

    let toastType =
      this.state.finalpress === 1 || this.state.finalpress === 2 ? (
        <PressMeToasts
          closeit={this.closeToast.bind(this)}
          toast_show={this.state.toast_show}
          press_dictionary={this.press_dictionary}
          num_of_clicks={this.state.num_of_clicks}
        />
      ) : null

    let confettiSwitch =
      this.state.dict_check === 3 ? (
        <Confetti
          style={{ position: "fixed" }}
          recycle={this.state.confetti}
          gravity={this.state.gravity}
        />
      ) : null

    return (
      <div className={`outerBodyContainer ${homeChecker}`}>
        <div className={this.props.introClass}>
          <p className="p-hello">Hello, I'm</p>

          {headerType}

          {this.state.dict_check === 2 && this.startConfetti()}

          {confettiSwitch}

          <p className="p-sd">&#47;&#47; Software Developer</p>

          {toastType}
        </div>
      </div>
    )
  }
}

Intro.propTypes = {
  introClass: PropTypes.string.isRequired,
}
