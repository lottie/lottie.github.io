import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ComplianceButtonsPage = () => {
  return (
    <Layout>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row>
            <Col className="py-5">
              <h1 className="mb-3 h2">Compliance Buttons</h1>
              <div className="fw-normal h5">
                Buttons to represent compliance with the lottie specs
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="py-5">
        <Row>
          <Col>
            <h2>Disclaimer</h2>
            <p>
              Permission is granted to use the buttons on this page to represent
              compliance with the lottie specs. This does not grant permission
              to use the Lottie Animation Community logo in unauthorized ways.
            </p>
            <p>
              Use of these buttons does not indicate endorsement from the Lottie
              Animation Community.
            </p>
            <h2>1.0</h2>
            <Table striped bordered hover responsive size="sm">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Light</th>
                  <th>Dark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Small</th>
                  <td>
                    <a
                      href="/compliance-buttons/lottie-1.0-light-56.png"
                      target="_blank"
                    >
                      <img
                        height={28}
                        src="/compliance-buttons/lottie-1.0-light-56.png"
                        alt="lottie-1.0-light-56.png"
                      />
                    </a>
                  </td>
                  <td>
                    <a
                      href="/compliance-buttons/lottie-1.0-dark-56.png"
                      target="_blank"
                    >
                      <img
                        height={28}
                        src="/compliance-buttons/lottie-1.0-dark-56.png"
                        alt="lottie-1.0-dark-56.png"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Medium</th>
                  <td>
                    <a
                      href="/compliance-buttons/lottie-1.0-light-112.png"
                      target="_blank"
                    >
                      <img
                        height={56}
                        src="/compliance-buttons/lottie-1.0-light-112.png"
                        alt="lottie-1.0-light-112.png"
                      />
                    </a>
                  </td>
                  <td>
                    <a
                      href="/compliance-buttons/lottie-1.0-dark-112.png"
                      target="_blank"
                    >
                      <img
                        height={56}
                        src="/compliance-buttons/lottie-1.0-dark-112.png"
                        alt="lottie-1.0-dark-112.png"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Large</th>
                  <td>
                    <a
                      href="/compliance-buttons/lottie-1.0-light-224.png"
                      target="_blank"
                    >
                      <img
                        height={112}
                        src="/compliance-buttons/lottie-1.0-light-224.png"
                        alt="lottie-1.0-light-224.png"
                      />
                    </a>
                  </td>
                  <td>
                    <a
                      href="/compliance-buttons/lottie-1.0-dark-224.png"
                      target="_blank"
                    >
                      <img
                        height={112}
                        src="/compliance-buttons/lottie-1.0-dark-224.png"
                        alt="lottie-1.0-dark-224.png"
                      />
                    </a>
                  </td>
                </tr>
                <tr className="iframe-row">
                  <th>Scalable</th>
                  <td className="position-relative">
                    <a
                      href="/compliance-buttons/lottie-1.0-light.svg"
                      target="_blank"
                      className="stretched-link"
                    >
                      <img
                        height={84}
                        src="/compliance-buttons/lottie-1.0-light.svg"
                        alt="lottie-1.0-dark-112.png"
                      />
                    </a>
                  </td>
                  <td className="position-relative">
                    <a
                      href="/compliance-buttons/lottie-1.0-dark.svg"
                      target="_blank"
                      className="stretched-link"
                    >
                      <img
                        height={84}
                        src="/compliance-buttons/lottie-1.0-dark.svg"
                        alt="lottie-1.0-dark.svg"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ComplianceButtonsPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo
    title="Compliance Buttons"
    description="Buttons to represent compliance with the lottie specs"
  />
)
