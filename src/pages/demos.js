import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LottieCard from "../components/LottieCard"

import { sampleAnimations } from "../data/sampleAnimations"

const Demos = () => {
  return (
    <Layout>
      <Container className="py-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2 className="h3 mb-3">Lottie Demo Gallery</h2>
            <p className="text-muted">
              Explore a collection of Lottie animations showcasing the format's capabilities
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {sampleAnimations.map((animation) => (
            <Col lg={4} md={6} key={`sample-animation-${animation.id}`}>
              <LottieCard
                title={animation.title}
                author={animation.author}
                authorUrl={animation.authorUrl}
                animationData={animation.animationData}
              />
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col>
            <a 
              href="/"
              className="text-decoration-none fw-semibold text-primary"
            >
              ← Back to Home
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Demos

export const Head = () => <Seo title="Demos" />