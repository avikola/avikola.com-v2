import React from "react"
import { HomeButton } from "./homebutton"
import "../../styles/home/allbuttons.scss"

export const AllButtons = () => {
  return (
    <div className="home-buttons-div">
      <HomeButton label="about" num="1" />
      <HomeButton label="projects" num="2" />
      <HomeButton label="experience" num="3" />
    </div>
  )
}
