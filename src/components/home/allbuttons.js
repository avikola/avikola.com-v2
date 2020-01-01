import React from "react"
import { HomeButton } from "./homebutton"
import "../../styles/home/allbuttons.scss"

export const AllButtons = () => {
  return (
    <div className="home-buttons-div">
      <HomeButton label="About" num="1" />
      <HomeButton label="Projects" num="2" />
      <HomeButton label="Experience" num="3" />
    </div>
  )
}
