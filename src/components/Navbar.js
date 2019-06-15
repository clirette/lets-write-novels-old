import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavbar = styled.nav`
  background-color: #57507c;
  display: flex;
  justify-content: space-between;
  max-height: 8vh;
`

const LinkContainer = styled.div`
  width: 70%; /* combined with width for BannerContainer */
  font-size: 3rem;
  font-family: "Dancing Script", cursive;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ddd;
  font-weight: 500;
  letter-spacing: 0.1rem;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`

const BannerContainer = styled.div`
  width: 30%;
`

const Banner = styled.div`
  background-color: #44314f;
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
  &:hover {
    padding-top: 3rem;
    height: 13rem;
  }
`

const activeLink = {
  color: "#ac7ec7",
}

const Navbar = () => {
  return (
    <StyledNavbar>
      <LinkContainer>
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

export default Navbar
