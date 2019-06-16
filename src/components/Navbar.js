import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { device } from "../helpers/device"

const StyledNavbar = styled.nav`
  background-color: #57507c;
  display: flex;
  justify-content: space-between;
  max-height: 10vh;
`

const LinkContainer = styled.div`
  width: 70%; /* combined with width for BannerContainer */
  font-size: 3rem;
  font-family: "Dancing Script", cursive;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${device.mobileL} {
    display: none;
  }
`

const Hamburger = styled.div`
  height: 3rem;
  width: 3rem;
  border: 0.2rem solid #fff;
  border-radius: 0.1rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 2vh;
  margin-left: 2rem;
  cursor: pointer;
  @media ${device.mobileL} {
    display: flex;
  }
`

const HamburgerLines = styled.hr`
  width: 50%;
  color: #fff;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ddd;
  font-weight: 500;
  letter-spacing: 0.1rem;
  transition: color 0.3s ease-in-out;
  @media (hover: hover) {
    &:hover {
      color: #fff;
    }
  }
`

const BannerContainer = styled.div`
  width: 30%;
`

const Banner = styled.div`
  background-color: #1d6e75;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  padding-top: 1rem;
  height: 11rem;
  width: 11rem;
  line-height: 1.5;
  cursor: pointer;
  font-weight: 500;
  margin: auto;
  clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
  transition: all 0.3s ease-in-out;
  @media (hover: hover) {
    &:hover {
      padding-top: 3rem;
      height: 13rem;
    }
  }

  @media ${device.mobileL} {
    height: 7rem;
    width: 7rem;
    font-size: 1rem;
  }
`

const activeLink = {
  color: "#ac7ec7",
}

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.linkContainer = React.createRef()
    this.navbarContainer = React.createRef()
  }

  hamburgerClick = e => {
    // Use classes defined in stylesheet for hamburger expanding/collapsing
    this.navbarContainer.current.classList.toggle("styledNavbarExpanded")
    this.linkContainer.current.classList.toggle("linkContainerExpanded")
  }

  render() {
    return (
      <StyledNavbar ref={this.navbarContainer}>
        <Hamburger onClick={this.hamburgerClick}>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
        </Hamburger>
        <LinkContainer ref={this.linkContainer}>
          <StyledLink to="/" activeStyle={activeLink}>
            Home
          </StyledLink>
          <StyledLink to="/drafting" activeStyle={activeLink}>
            Drafting
          </StyledLink>
          <StyledLink to="/crafting" activeStyle={activeLink}>
            Crafting
          </StyledLink>
          <StyledLink to="/publishing" activeStyle={activeLink}>
            Publishing
          </StyledLink>
        </LinkContainer>
        <BannerContainer>
          <Banner>Free Storybuilding Workbook</Banner>
        </BannerContainer>
      </StyledNavbar>
    )
  }
}

export default Navbar
