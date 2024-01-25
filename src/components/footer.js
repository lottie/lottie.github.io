import * as React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import lottieLogo from "../images/lottie.svg"
import { Link, navigate, useStaticQuery, graphql } from "gatsby"
import { ROUTES } from "../constants/index.js"

export const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            urls {
              site
              org
              spec
            }
          }
        }
      }
    `
  )

  const { siteMetadata } = site
  const { urls, author } = siteMetadata

  return (
    <Navbar expand="lg" as="footer" className="py-1">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={lottieLogo} className="logo" alt="Lottie logo" />
        </Link>
        <Navbar.Text className="text-black">
          {author?.name || ""}
        </Navbar.Text>
        <Nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Nav.Item>
            <Nav.Link href={urls?.spec || ""} target="_blank">
              {ROUTES.specification.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as="button"
              className="text-capitalize"
              onClick={() => navigate(ROUTES.implementations.route)}
            >
              {ROUTES.implementations.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={urls?.org || ""} target="_blank">
              {ROUTES.community.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as="button"
              className="text-capitalize"
              onClick={() => navigate(ROUTES.news.route)}
            >
              {ROUTES.news.text}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
