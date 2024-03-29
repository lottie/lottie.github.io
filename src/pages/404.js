import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row>
            <Col className="py-5">
              <h1 className="mb-3 h2">Not Found</h1>
              <h5 className="fw-normal">
                You just hit a route that doesn&#39;t exist
              </h5>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
