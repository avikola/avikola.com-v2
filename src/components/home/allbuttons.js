import React from "react"
import { HomeButton } from "./homebutton"
import styles from "../../styles/home/allbuttons.module.scss"

// prettier-ignore
export const AllButtons = () => {
  return (
    <div className={styles.home_buttons_div}>
      <HomeButton label="about" num="1" />
      <HomeButton label="projects" num="2" />
      <HomeButton label="experience" num="3" />
    </div>
  )
}
