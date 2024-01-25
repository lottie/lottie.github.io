import * as React from "react"
import { Link, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NewsPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="news-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section className="bg-primary-subtle">
          <Container className="py-5">
            <Row className="py-5">
              <Col md={{ span: 8, offset: 2 }} className="pb-5">
                <h1 itemProp="headline" className="display-5 mb-3 fw-bold">
                  {post.frontmatter.title}
                </h1>
                <small>{post.frontmatter.date}</small>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <section
                className="pb-5"
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </Col>
            {/* <Col md={{ span: 8, offset: 2 }}>
            <nav>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </Col> */}
          </Row>
        </Container>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default NewsPostTemplate

export const pageQuery = graphql`
  query NewsPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
