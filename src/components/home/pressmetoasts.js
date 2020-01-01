import React from "react"
import Toast from "react-bootstrap/Toast"
import "../../styles/home/pressmetoasts.scss"

export const PressMeToasts = props => {
  var delay_secs = 3000
  var pressMeCSS = "dontpressmetoast"

  if (props.num_of_clicks === 10) {
    delay_secs = 4000
    pressMeCSS = "dontpressmefinaltoast"
  }

  return (
    <Toast
      onClose={props.closeit}
      className={pressMeCSS}
      show={props.toast_show}
      delay={delay_secs}
      autohide
    >
      <Toast.Body>{props.press_dictionary[props.num_of_clicks]}</Toast.Body>
    </Toast>
  )
}
