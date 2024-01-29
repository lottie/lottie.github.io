import * as React from "react"
import { Link, graphql } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NewsIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
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
    <Layout>
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

            const featuredImg = getImage(
              post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
            )

            return (
              <Col key={post.fields?.slug || ""}>
                <Card
                  as="article"
                  itemScope
                  itemType="http://schema.org/Article"
                  className="border-0 shadow-lg"
                >
                  <Card.Img
                    as={GatsbyImage}
                    image={featuredImg}
                    alt="news-post-featured-image"
                    variant="top"
                  />
                  <Card.Body>
                    <Card.Title>
                      <Link
                        to={post.fields?.slug || ""}
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
export const Head = () => (
  <Seo
    title="News"
    description="Latest updates from Lottie Animation Community"
  />
)

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { contentType: { eq: "news" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                height: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
