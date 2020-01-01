import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.scss"
//import { Link } from "gatsby"

import { AllButtons } from "../components/home/allbuttons"
import { Intro } from "../components/home/intro"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="full_home_site">
    <SEO title="Home" />
    <AllButtons />
    <Intro />
  </div>
)

export default IndexPage
