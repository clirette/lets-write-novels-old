import React, { Fragment } from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"
import "../css/styles.css"

const Layout = props => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Let's Write Some Novels</title>
        <link
          href="https://fonts.googleapis.com/css?family=Dancing+Script|Montserrat:400,500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1.0"
        />
      </Helmet>
      <Navbar />
      {props.children}
    </Fragment>
  )
}

export default Layout
