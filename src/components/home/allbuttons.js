import React from "react"
import { HomeButton } from "./homebutton"
import styles from "../../styles/home/allbuttons.module.scss"

export class AllButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHome: true,
    }
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
    let homeChecker = !this.state.isHome ? styles.not_home : ""

    return (
      <div className={styles.hideit}>
        <div className={`${styles.home_buttons_div} ${homeChecker}`}>
          <HomeButton label="about" num="1" />
          <HomeButton label="projects" num="2" />
          <HomeButton label="experience" num="3" />
        </div>
      </div>
    )
  }
}
