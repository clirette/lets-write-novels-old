import React, { Fragment } from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"
import "../css/styles.css"

const Layout = props => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" /> <title>My Title</title>{" "}
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          href="https://fonts.googleapis.com/css?family=Dancing+Script|Montserrat:400,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      {props.children}
    </Fragment>
  )
}

export default Layout
