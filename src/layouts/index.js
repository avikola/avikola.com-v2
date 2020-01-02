import React from "react"

import { AllButtons } from "../components/home/allbuttons"
import { Intro } from "../components/home/intro"
import { Helmet } from "react-helmet"
// FIXME: import fonts the right way.
export default ({ children }) => (
  <div className="full_home_site">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Avishkar Kolahalu // Software Developer</title>
      <link rel="canonical" href="https://avikola.com" />

      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />

      <link
        href="https://fonts.googleapis.com/css?family=Bebas+Neue|Open+Sans:400|Roboto+Mono:500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <AllButtons />
    <Intro introClass="intro-text" />
    {children}
  </div>
)
