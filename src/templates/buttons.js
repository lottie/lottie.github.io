import * as React from "react"

import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Roadmap = ({ data }) => {
  const { page } = data
  const { html, frontmatter } = page

  return (
    <Layout>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row>
            <Col className="py-5">
              <h1 className="mb-3 h2">{frontmatter.title || ""}</h1>
              <h5 className="fw-normal">{frontmatter.description || ""}</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col>
            <section
              className="py-5"
              dangerouslySetInnerHTML={{ __html: html }}
              itemProp="articleBody"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Roadmap

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Buttons" description="Buttons" />

export const pageQuery = graphql`
  query ImplementationsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
