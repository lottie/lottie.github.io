import * as React from "react"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import LottiePlayer from "lottie-react"

import lottieLogo from "../assets/lottie-logo.json"

import { ROUTES } from "../constants/index"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CONTENT = {
  intro: {
    title: "Lottie is an open format for animated vector graphics",
    body: "​​Lottie is an open-source vector graphics animation file format. It was first created in 2015 by Hernan Torrisi as an export format for the export and playback of animations from Adobe After Effects. It is now a highly popular animation format used on the web, mobile applications and other systems with multiple independent renderer implementations and creation support.",
  },
  whyLottie: {
    title: "What is Lottie?",
    body: "Lottie animations are typically created using Adobe After Effects, and they can include complex animations, motion graphics, and interactive elements. Once an animation is created, it can be exported as a Lottie JSON file. This JSON file contains all the information needed to recreate the animation, including keyframes, easing curves, and layer information.",
    list: [
      {
        title: "Vector Graphics",
        body: "Vector Graphics are resolution-independent images created from geometric shapes like curves and lines rather than a grid of pixels",
      },
      {
        title: "Tweening",
        body: "Tweening is the process of animating graphics where the animator defines shape properties at specific keyframes and the frames between those are interpolated automatically.",
      },
      {
        title: "Rich Ecosystem",
        body: "A mature and robust ecosystem of players, creation tools, libraries and free assets. Trusted and used by thousands of companies to enrich their user experience.",
      },
      {
        title: "Open file format",
        body: "Lottie is an open standard based on the JSON format, allowing for ease of transfer over the web and manipulation with existing tools.",
      },
    ],
  },
  community: {
    title: "About Lottie Animation Community",
    list: [
      {
        body: "Lottie Animation Community (LAC), a non-profit open source project hosted by The Linux Foundation, dedicated to establishing the Lottie File Format as an efficient, scalable and cross-platform animated vector graphics technology and open file format.",
      },
      {
        body: "LAC was founded by a community of pioneers in recognition of that need. LAC aims to develop a formal Lottie format specification for implementation across renderers and other tools, and works towards the promotion and widespread adoption of the Lottie file format as an industry standard.",
      },
      {
        body: "LAC operates as a project under the governance of the Joint Development Foundation, guaranteeing an open, collaborative approach to our standardization efforts. Our work is deeply rooted in transparency, ensuring that everyone in our community has a voice in the development and refinement of the Lottie File Format.",
      },
    ],
  },
}

const Home = ({ data }) => {
  const siteMetadata = data.site.siteMetadata
  const { urls } = siteMetadata || {}

  return (
    <Layout>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row className="py-5">
            <Col className="text-center">
              <Col md={{ span: 10, offset: 1 }}>
                <h1
                  className="display-3 mb-3 fw-bold"
                  style={{ color: "#032d2a" }}
                >
                  {CONTENT.intro.title}
                </h1>
              </Col>
              <Col md={{ span: 8, offset: 2 }}>
                <h2 className="fs-5 mb-4 fw-normal lh-base">
                  {CONTENT.intro.body}
                </h2>
              </Col>

              <Button size="lg" href={urls?.spec || ""} target="_blank">
                {ROUTES.specification.text2}
              </Button>

              <div>
                <Button
                  size="lg"
                  variant="link"
                  className="mt-4 py-0 fw-semibold text-decoration-none text-primary"
                  href={ROUTES.contribute.route || ""}
                >
                  {ROUTES.contribute.text}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="pt-4 pb-5">
          <Col className="text-center">
            <LottiePlayer
              animationData={lottieLogo}
              loop={true}
              style={{ width: "190px", height: "175px" }}
              className="mx-auto"
            />
            <h2>{CONTENT.whyLottie.title}</h2>
            <Col md={{ span: 8, offset: 2 }} className="my-4">
              <p>{CONTENT.whyLottie.body}</p>
            </Col>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              {CONTENT.whyLottie.list.map((content, index) => (
                <Col md={6} key={`why-lottie-list-${index}`}>
                  <h3 className="h5">{content.title}</h3>
                  <p>{content.body}</p>
                </Col>
              ))}
              <Col className="mt-4">
                <Button size="lg" href={urls?.spec || ""} target="_blank">
                  {ROUTES.specification.text2}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row className="py-5">
            <Col md={{ span: 8, offset: 2 }}>
              <h4 id="community" className="h2 mb-4">
                {CONTENT.community.title}
              </h4>
              {CONTENT.community.list.map((content, index) => (
                <p key={`welcome-list-${index}`} className="mb-4">
                  {content.body}
                </p>
              ))}

              <Button
                as="a"
                size="lg"
                className="mt-4"
                href={ROUTES.contribute.route || ""}
              >
                {ROUTES.contribute.text}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        urls {
          site
          specRepo
          spec
        }
      }
    }
  }
`
