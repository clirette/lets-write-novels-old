import React from "react"
import styled from "styled-components"

import heroImage from "../images/hero.jpeg"
import { device } from "../helpers/device"
import Layout from "../components/Layout"

const Hero = styled.div`
  height: 60vh;
  width: 100vw;
  background: url(${heroImage}) no-repeat center center/cover;
  @media ${device.mobileL} {
    background-size: 200% 100%;
  }
`

const LandingContainer = styled.div`
  width: 95%;
  margin: auto;
`

const LandingDescriptionText = styled.p`
  width: 70%;
  font-weight: 500;
  padding: 2rem;
  margin: auto;
  font-size: 2.4rem;
  text-align: center;
  @media ${device.mobileL} {
    width: 100%;
    font-size: 2rem;
  }
`

export default () => (
  <Layout>
    <Hero />
    <LandingContainer>
      <LandingDescriptionText>
        Welcome to Let’s Write Some Novels, a site full of writing advice for
        budding novelists. Select a post to begin learning!
      </LandingDescriptionText>
    </LandingContainer>
  </Layout>
)
