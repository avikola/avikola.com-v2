import React from "react"

import { AllButtons } from "../components/home/allbuttons"
import { Intro } from "../components/home/intro"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div className="full_home_site">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Avishkar Kolahalu // Software Developer</title>
      <link rel="canonical" href="https://avikola.com" />
    </Helmet>
    <AllButtons />
    <Intro introClass="intro-text" />
    {children}
  </div>
)
