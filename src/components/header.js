import * as React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import lottieLogo from "../assets/lottie.svg"
import { ROUTES } from "../constants/index.js"
import { Link, useStaticQuery, graphql } from "gatsby"

export const Header = () => {
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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
  const { urls } = siteMetadata

  return (
    <Navbar expand="lg" as="header">
      <Container>
        <Link className="navbar-brand" to="/" aria-label="Lottie">
          <img src={lottieLogo} className="logo" alt="Lottie logo" />
        </Link>
        <Navbar.Toggle
          aria-controls="bdNavbar"
          aria-label="Toggle Navigation"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="d-inline-flex mt-2 mt-md-0 ms-md-auto"
            aria-label="Main navigation"
          >
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
