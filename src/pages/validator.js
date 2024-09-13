import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"

import Layout from "../components/layout"
import Seo from "../components/seo"

const content = {
  title: "Lottie Validator",
  description:
    "Validates a given Lottie JSON file against the Lottie specification version.",
}

const tabCssClass = "border border-top-0 rounded-bottom p-3 shadow"

const ValidatorPage = () => {
  return (
    <Layout>
      <section className="bg-primary-subtle">
        <Container className="py-5">
          <Row>
            <Col className="py-5">
              <h1 className="mb-3 h2">{content.title}</h1>
              <h5 className="fw-normal">{content.description}</h5>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="py-5 mb-5">
        <Row>
          <Col md={8} className="mb-3">
            <Tabs defaultActiveKey="url" id="justify-tab-example" justify>
              <Tab eventKey="url" title="Paste URL" className={tabCssClass}>
                Tab content for url
              </Tab>
              <Tab eventKey="file" title="Upload File" className={tabCssClass}>
                Tab content for file
              </Tab>
              <Tab eventKey="text" title="Paste Text" className={tabCssClass}>
                Tab content for Text
              </Tab>
            </Tabs>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="pt-2">Options</h6>
            <div>
              <Form.Check
                inline
                label="Warn about unknown object types"
                name="check-warning-type"
                type="checkbox"
                id="check-warning-type"
              />
              <Form.Check
                inline
                label="Warn about unknown properties"
                name="check-warning-property"
                type="checkbox"
                id="check-warning-property"
              />
            </div>
          </Col>
          <Col>
            <Table striped bordered hover className="shadow">
              <thead>
                <tr>
                  <th>Path</th>
                  <th>Named Path</th>
                  <th>Severity</th>
                  <th>Message</th>
                  <th>Docs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const Head = () => (
  <Seo title={content.title} description={content.description} />
)

export default ValidatorPage
