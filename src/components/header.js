import * as React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import lottieLogo from "../images/lottie.svg"
import { URLS, ROUTES } from "../constants/index.js"
import { Link, navigate } from "gatsby"

export const Header = () => {
  return (
    <Navbar expand="lg" as="header">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={lottieLogo} className="logo" alt="Lottie logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" role="a">
          <Nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Nav.Item>
              <Nav.Link href={URLS.spec.url} target="_blank">
                {URLS.spec.text.v1}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as="button"
                className="text-capitalize"
                onClick={() => navigate(ROUTES.implementations)}
              >
                {ROUTES.implementations}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={URLS.community.url} target="_blank">
                {URLS.community.text.v1}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as="button"
                className="text-capitalize"
                onClick={() => navigate(ROUTES.news)}
              >
                {ROUTES.news}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
