import React from "react"
import "../../styles/home/homebutton.scss"
import { Link } from "gatsby"

export class HomeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animateClick: false,
      animateState: "",
    }
    this.defaultState = "default-" + props.num
  }
  render() {
    return (
      <Link to={`/${this.props.label}/`} style={{ textDecoration: "none" }}>
        <div
          className={`${this.defaultState} each-btn ${this.state.animateState}`}
          onClick={() => this.setState({ animateState: " animate-button" })}
        >
          {this.props.label}
        </div>
      </Link>
    )
  }
}
