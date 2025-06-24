import * as React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import lottieLogo from "../assets/lottie.svg"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ROUTES } from "../constants/index.js"

export const Footer = () => {
  const { site } = useStaticQuery(
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
            <Nav.Link as={Link} to={ROUTES.changelog.route} target="_blank">
              {ROUTES.changelog.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={ROUTES.validator.route} target="_blank">
              {ROUTES.validator.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={ROUTES.contribute.route} target="_blank">
              {ROUTES.contribute.text}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              className="text-capitalize"
              to={ROUTES.news.route}
            >
              {ROUTES.news.text}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
