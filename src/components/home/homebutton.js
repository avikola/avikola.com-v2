import React from "react"
import "../../styles/home/homebutton.scss"

export class HomeButton extends React.Component {
  constructor(props) {
    super(props)
    this.buttonState = "default-" + props.num
  }
  render() {
    return (
      <div className={`${this.buttonState} each-btn`}>{this.props.label}</div>
    )
  }
}
