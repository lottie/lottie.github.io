import * as React from "react"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { ROUTES } from "../constants/index"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CONTENT = {
  intro: {
    title: "Lottie: An open-source animation format",
    body: '​​Lottie is an open-source animation file format and framework that allows developers to use animations in their applications. It was created by Airbnb and released in 2017.  The name "Lottie" is inspired by Lottie Reiniger, a pioneering German animator.',
  },
  whyLottie: {
    title: "Why Lottie?",
    body: "Lottie animations are typically created using Adobe After Effects, and they can include complex animations, motion graphics, and interactive elements. Once an animation is created, it can be exported as a Lottie JSON file. This JSON file contains all the information needed to recreate the animation, including keyframes, easing curves, and layer information.",
    list: [
      {
        title: "Open file format specification",
        body: "With the Lottie Animation Community (LAC), we strive to standardize and maintain the Lottie Animation Format",
      },
      {
        title: "Machine Readable JSON",
        body: "Lottie animations are shipped as simple machine readable .json files, making them extremely easy to work with.",
      },
      {
        title: "JSON-based format",
        body: "Lottie animations are defined using the widely used JSON format, allowing for ease of transfer over the web and manipulation with existing tools.",
      },
      {
        title: "Ecosystem",
        body: "Lottie animations are defined using the widely used JSON format, allowing for ease of transfer over the web and manipulation with existing tools.",
      },
    ],
  },
  welcome: {
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

const Home = ({ data, location }) => {
  const siteMetadata = data.site.siteMetadata
  const { urls } = siteMetadata || {}

  return (
    <Layout location={location}>
      <Container fluid className="bg-body-tertiary">
        <Row>
          <Col className="py-5 px-md-5 mb-4 text-center">
            <Col md={{ span: 6, offset: 3 }} className="my-4">
              <h1 className="display-5 fw-bold text-primary">
                {CONTENT.intro.title}
              </h1>
            </Col>
            <Col md={{ span: 10, offset: 1 }} className="my-4">
              <span className="fs-4 text-center">{CONTENT.intro.body}</span>
            </Col>

            <Button size="lg" href={urls?.spec || ""} blank="_target">
              {ROUTES.specification.text}
            </Button>

            <Button
              size="lg"
              variant="link"
              className="d-block mt-2 text-decoration-none text-primary"
              blank="_target"
              href={urls?.org || ""}
            >
              {ROUTES.community.text}
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="py-5">
          <Col className="text-center">
            <h2 className="fw-bold">{CONTENT.whyLottie.title}</h2>
            <Col md={{ span: 8, offset: 2 }} className="my-4">
              <p>{CONTENT.whyLottie.body}</p>
            </Col>
          </Col>
        </Row>
        <Row className="py-5">
          {CONTENT.whyLottie.list.map((content, index) => (
            <Col md={6} key={`why-lottie-list-${index}`}>
              <h3>{content.title}</h3>
              <p>{content.body}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="bg-body-tertiary">
        <Row>
          <Col className="py-5 px-md-5">
            <h2 className="mb-4">{CONTENT.welcome.title}</h2>
            {CONTENT.welcome.list.map((content, index) => (
              <p key={`welcome-list-${index}`}>{content.body}</p>
            ))}

            <Button size="lg" className="mt-4" href={urls?.org || ''}>
              Start contributing to Lottie
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home Page" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        urls {
          site
          org
          spec
        }
      }
    }
  }
`
