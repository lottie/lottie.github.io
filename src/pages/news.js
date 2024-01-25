import * as React from "react"
import { Link, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NewsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Container>
          <Row>
            <Col>
              <p>No news posts found.</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row>
            <Col className="py-5">
              <h1 className="mb-3 h2">News</h1>
              <h5 className="fw-normal">
                Latest updates from Lottie Animation Community
              </h5>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="py-5 mb-5">
        <Row xs={1} md={2} className="g-4">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <Col key={post.fields.slug}>
                <Card
                  as="article"
                  itemScope
                  itemType="http://schema.org/Article"
                  className="border-0 shadow-lg"
                >
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title>
                      <Link
                        to={post.fields.slug}
                        itemProp="url"
                        className="text-decoration-none"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      <small>{post.frontmatter.date}</small>
                    </Card.Text>
                    <Card.Text
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default NewsIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All news posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`