import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

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
          <Col>
            <Tabs defaultActiveKey="url" id="justify-tab-example" justify>
              <Tab eventKey="url" title="Url" className={tabCssClass}>
                Tab content for url
              </Tab>
              <Tab eventKey="file" title="File" className={tabCssClass}>
                Tab content for file
              </Tab>
              <Tab eventKey="text" title="Text" className={tabCssClass}>
                Tab content for Text
              </Tab>
              <Tab eventKey="options" title="Options" className={tabCssClass}>
                Tab content for Options
              </Tab>
            </Tabs>
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
