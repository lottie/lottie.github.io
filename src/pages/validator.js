import * as React from "react"
import { useState, useRef } from "react"

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
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { isValidUrl } from "../utils/helpers"
import { validate } from "../utils/validator"

const content = {
  title: "Lottie Validator",
  description:
    "Validates a given Lottie JSON file against the Lottie specification version",
}

const tabCssClass = "border border-top-0 rounded-bottom p-4 shadow"

const ValidatorPage = () => {
  // refs

  const lottieFileInputRef = useRef(null)

  // states

  const [loading, setLoading] = useState(false)

  const [currentTab, setCurrentTab] = useState("url")

  const [errorMessage, setErrorMessage] = useState("")

  const [lottieUrl, setLottieUrl] = useState("")
  const [lottieFile, setLottieFile] = useState(null)
  const [lottieText, setLottieText] = useState("")

  const [lottie, setLottie] = useState("")
  const [validationErrors, setValidationErrors] = useState([])

  const [warningProperty, setWarningProperty] = useState(false)
  const [warningType, setWarningType] = useState(false)

  // handlers

  const validateLottieString = lottieStr => {
    setLoading(true)
    setLottie(lottieStr)

    try {
      const result = validate(lottieStr)
      setValidationErrors(result)
    } catch (e) {
      setErrorMessage(e.message)
    }

    setLoading(false)
  }

  const validateLottieUrl = () => {
    if (!lottieUrl) {
      setErrorMessage("Lottie URL cannot be empty")
      return
    }

    if (!isValidUrl(lottieUrl)) {
      setErrorMessage("Invalid Lottie URL")
      return
    }

    setLoading(true)

    fetch(lottieUrl)
      .then(result => result.text())
      .then(validateLottieString)
      .catch(e =>
        setErrorMessage(`Could not load Lottie file from URL: ${e.message}`)
      )
      .finally(() => setLoading(false))
  }

  const validateLottieFile = () => {
    if (!lottieFile) {
      setErrorMessage("Lottie File cannot be empty")
      return
    }

    setLoading(true)

    const reader = new FileReader()
    reader.onload = e => validateLottieString(e.target.result)
    reader.onerror = _e => setErrorMessage("Could not load file")
    reader.readAsText(lottieFile)

    setLoading(false)
  }

  const validateLottieText = () => {
    if (!lottieText) {
      setErrorMessage("Lottie text cannot be empty")
      return
    }

    if (typeof lottieText !== "string") {
      setErrorMessage("Lottie text must be a string")
      return
    }

    validateLottieString(lottieText)
  }

  // ui handlers

  const onTabsSelect = key => setCurrentTab(key)
  const onWarningTypeChange = checked => setWarningType(checked)
  const onWarningPropertyChange = checked => setWarningProperty(checked)

  const resetStates = () => {
    setLottie("")
    setValidationErrors("")
    setLottieUrl("")
    setLottieFile(null)
    setLottieText("")
    setErrorMessage("")
    if (lottieFileInputRef.current) lottieFileInputRef.current.value = ""
  }

  const onValidateBtnClick = () => {
    switch (currentTab) {
      case "url":
        validateLottieUrl()
        break
      case "file":
        validateLottieFile()
        break
      case "text":
        validateLottieText()
        break
      default:
        break
    }
  }

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
      <Container className="py-5 mb-5 position-relative">
        <Row>
          <Col md={8} className="mb-3">
            <Tabs
              defaultActiveKey={currentTab}
              id="justify-tab-example"
              justify
              onSelect={onTabsSelect}
            >
              <Tab eventKey="url" title="URL" className={tabCssClass}>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder="Paste Lottie JSON URL"
                  onChange={e => setLottieUrl(e.target.value)}
                />
              </Tab>
              <Tab eventKey="file" title="File" className={tabCssClass}>
                <Form.Group controlId="formFileLg">
                  <Form.Control
                    type="file"
                    accept="application/JSON"
                    ref={lottieFileInputRef}
                    onChange={e => setLottieFile(e.target.files[0])}
                  />
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
                    onChange={e => setLottieText(e.target.value)}
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
                onChange={e => onWarningTypeChange(e.currentTarget.checked)}
              />
              <Form.Check
                inline
                label="Warn about unknown properties"
                name="check-warning-property"
                type="checkbox"
                id="check-warning-property"
                onChange={e => onWarningPropertyChange(e.currentTarget.checked)}
              />
            </div>
            <ButtonGroup aria-label="valiate buttons" size="sm">
              <Button onClick={onValidateBtnClick}>validate</Button>
              <Button
                variant="outline-primary"
                onClick={resetStates}
                disabled={!validationErrors && !errorMessage}
              >
                reset
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            {loading && (
              <div className="text-center">
                <Spinner animation="border" role="status" variant="primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {!errorMessage && lottie && validationErrors.length === 0 && (
              <Alert variant="primary">
                Validation successful with no errors
              </Alert>
            )}
            {!loading && validationErrors.length > 0 && (
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
                  {validationErrors.map((result, index) => (
                    <tr key={`tr-result-${index}`}>
                      <td>{result.instancePath}</td>
                      <td>{`${Object.keys(result.params)}`}</td>
                      <td></td>
                      <td>{result.message}</td>
                      <td>{result.schemaPath}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
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
