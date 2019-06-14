import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavbar = styled.nav`
  background-color: #57507c;
  font-size: 3rem;
  font-family: "Dancing Script", cursive;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.1rem;
  &:hover {
    color: #ac7ec7;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/drafting">Drafting</StyledLink>
      <StyledLink to="/crafting">Crafting</StyledLink>
      <StyledLink to="/publishing">Publishing</StyledLink>
    </StyledNavbar>
  )
}

export default Navbar
