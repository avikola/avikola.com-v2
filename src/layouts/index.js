import React from "react"

import { AllButtons } from "../components/home/allbuttons"
import { Intro } from "../components/home/intro"

// FIXME: import fonts the right way.
export default ({ children }) => (
  <div className="full_home_site">
    <AllButtons />
    <Intro introClass="intro-text" />
    {children}
  </div>
)
