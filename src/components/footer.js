import * as React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import lottieLogo from "../assets/lottie.svg"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ROUTES } from "../constants/index.js"

export const Footer = () => {
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
            }
            urls {
              site
              specRepo
              spec
            }
          }
        }
        allMarkdownRemark(filter: { fields: { contentType: { eq: "news" } } }) {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  )

  const newsRoutePrefix = `/${ROUTES.news.route}`
  const newsRoute =
    (allMarkdownRemark.nodes || []).length === 1
      ? allMarkdownRemark.nodes[0].fields?.slug
      : newsRoutePrefix
  const { siteMetadata } = site
  const { urls, author } = siteMetadata

  return (
    <Navbar expand="lg" as="footer" className="py-1">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={lottieLogo} className="logo" alt="Lottie logo" />
        </Link>
        <Navbar.Text className="text-black">{author?.name || ""}</Navbar.Text>
        <Nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Nav.Item>
            <Nav.Link href={urls?.spec || ""} target="_blank">
              {ROUTES.specification.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              className="text-capitalize"
              to={ROUTES.implementations.route}
            >
              {ROUTES.implementations.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={ROUTES.roadmap.route} target="_blank">
              {ROUTES.roadmap.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={ROUTES.validator.route} target="_blank">
              {ROUTES.validator.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={ROUTES.community.route} target="_blank">
              {ROUTES.community.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              className="text-capitalize"
              to={newsRoute || ""}
            >
              {ROUTES.news.text}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
