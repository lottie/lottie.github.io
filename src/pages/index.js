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
    title: "Lottie is an open format for animated vector graphics",
    body: "Lottie is an open-source vector graphics animation file format . It was first created in 2015 by Hernan Torrisi as an export format for the export and playback of animations from Adobe After Effects. It is now a highly popular animation format used on the web, mobile applications and other systems with multiple independent renderer implementations and creation support. ",
  },
  whyLottie: {
    title: "What is Lottie?",
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
        title: "Rich Ecosystem",
        body: "?",
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
                <h2 className="fs-5 text-center mb-4 fw-normal lh-base">
                  {CONTENT.intro.body}
                </h2>
              </Col>

              <Button size="lg" href={urls?.spec || ""} blank="_target">
                {ROUTES.specification.text}
              </Button>

              <div>
                <Button
                  size="lg"
                  variant="link"
                  className="mt-4 py-0 fw-semibold text-decoration-none text-primary"
                  blank="_target"
                  href={urls?.org || ""}
                >
                  {ROUTES.community.text}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="py-5">
          <Col className="text-center">
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
                  <h5>{content.title}</h5>
                  <p>{content.body}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row className="py-5">
            <Col md={{ span: 8, offset: 2 }}>
              <h2 className="mb-4">{CONTENT.welcome.title}</h2>
              {CONTENT.welcome.list.map((content, index) => (
                <p key={`welcome-list-${index}`} className="mb-4">
                  {content.body}
                </p>
              ))}

              <Button size="lg" className="mt-4" href={urls?.org || ""}>
                Start contributing to Lottie
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
