import * as React from "react"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NewsPostTemplate = ({ data: { markdownRemark: post } }) => {
  const featuredImg = getImage(
    post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
  )

  return (
    <Layout>
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
            <Col xs={12} className="text-center">
              <GatsbyImage
                className="page-thumbnail-image mb-4"
                image={featuredImg}
                alt="news-post-featured-image"
              />
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <section
                className="pb-5"
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </Col>
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 900
              placeholder: BLURRED
              quality: 80
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
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
