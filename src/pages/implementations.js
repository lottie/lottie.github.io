import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Implementations = () => {
  return (
    <Layout>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row>
            <Col className="py-5">
              <h1 className="mb-3 h2">Implementations</h1>
              <h5 className="fw-normal">...</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Implementations

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All Implementations posts" />
