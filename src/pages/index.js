import * as React from "react"
import { graphql, Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import LottiePlayerSSR from "../components/LottiePlayerSSR"

import lottieLogo from "../assets/lottie-logo.json"

import { ROUTES } from "../constants/index"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Faq from "../components/faq"
import LottieCard from "../components/LottieCard"

import { featuredAnimations } from "../data/sampleAnimations"
import { homeContent } from "../data/homeContent"
import { faqData } from "../data/faqData"


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
                  {homeContent.intro.title}
                </h1>
              </Col>
              <Col md={{ span: 8, offset: 2 }}>
                <h2 className="fs-5 mb-4 fw-normal lh-base">
                  {homeContent.intro.body}
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
            <LottiePlayerSSR
              animationData={lottieLogo}
              loop={true}
              style={{ width: "190px", height: "175px" }}
              className="mx-auto"
            />
            <h2>{homeContent.whyLottie.title}</h2>
            <Col md={{ span: 8, offset: 2 }} className="my-4">
              <p>{homeContent.whyLottie.body}</p>
            </Col>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              {homeContent.whyLottie.list.map((content, index) => (
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
      
      <section className="py-5" id="demos">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row className="g-4">
                {featuredAnimations.map((animation) => (
                  <Col md={6} key={`featured-animation-${animation.id}`}>
                    <LottieCard
                      title={animation.title}
                      author={animation.author}
                      authorUrl={animation.authorUrl}
                      animationData={animation.animationData}
                      className="shadow border-0"
                    />
                  </Col>
                ))}
                <Col className="mt-4">
                  <Link 
                    to="/demos"
                    className="text-decoration-none fw-semibold text-primary"
                  >
                    View More Demos →
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row className="py-5">
            <Col md={{ span: 8, offset: 2 }}>
              <h4 id="community" className="h2 mb-4">
                {homeContent.community.title}
              </h4>
              {homeContent.community.list.map((content, index) => (
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
      <Faq title={faqData.title} items={faqData.items} />
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
