import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import FloatingLabel from "react-bootstrap/FloatingLabel"

import Layout from "../components/layout"
import Seo from "../components/seo"

const content = {
  title: "Lottie Validator",
  description:
    "Validates a given Lottie JSON file against the Lottie specification version",
}

const tabCssClass = "border border-top-0 rounded-bottom p-4 shadow"

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
              <Tab eventKey="url" title="URL" className={tabCssClass}>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder="Paste Lottie JSON URL"
                />
              </Tab>
              <Tab eventKey="file" title="File" className={tabCssClass}>
                <Form.Group controlId="formFileLg">
                  <Form.Control type="file" accept="application/JSON" />
                </Form.Group>
              </Tab>
              <Tab eventKey="text" title="Text" className={tabCssClass}>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Lottie JSON text"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Paste Lottie JSON text"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Tab>
            </Tabs>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="pt-2">Options</h6>
            <div className="mb-2">
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
            <ButtonGroup aria-label="valiate buttons" size="sm">
              <Button>validate</Button>
              <Button variant="outline-primary" disabled>
                reset
              </Button>
            </ButtonGroup>
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
