import * as React from "react"
import { useState, useRef, useEffect } from "react"

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

const content = {
  title: "Lottie Validator",
  description:
    "Validates a given Lottie JSON file against the Lottie specification version",
}

const tabCssClass = "border border-top-0 rounded-bottom p-4 shadow"

const isValidUrl = str => {
  try {
    new URL(str)
    return true
  } catch (_) {
    return false
  }
}

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

  const [warningProperty, setWarningProperty] = useState(false)
  const [warningType, setWarningType] = useState(false)

  // handlers

  const validateLottieString = lottieStr => {
    if (!lottieStr) {
      setErrorMessage("Lottie cannot be empty")
      return
    }

    if (typeof lottieStr !== "string") {
      setErrorMessage("Lottie must be a string")
      return
    }

    setLoading(true)

    try {
      const lottieObj = JSON.parse(lottieStr)
      console.log("validation", typeof lottieObj)
    } catch (e) {
      setErrorMessage(`Could not parse Lottie JSON: ${e.message}`)
    }

    setLoading(false)
  }

  const validateLottieUrl = url => {
    if (!url) {
      setErrorMessage("Lottie URL cannot be empty")
      return
    }

    if (!isValidUrl(url)) {
      setErrorMessage("Invalid Lottie URL")
      return
    }

    setLoading(true)

    fetch(url)
      .then(result => result.text())
      .then(setLottie)
      .catch(e =>
        setErrorMessage(`Could not load Lottie file from URL: ${e.message}`)
      )
      .finally(() => setLoading(false))
  }

  const validateLottieFile = file => {
    if (!file) {
      setErrorMessage("Lottie File cannot be empty")
      return
    }

    setLoading(true)

    const reader = new FileReader()
    reader.onload = e => setLottie(e.target.result)
    reader.onerror = _e => setErrorMessage("Could not load file")
    reader.readAsText(file)

    setLoading(false)
  }

  const validateLottieText = text => {
    if (!text) {
      setErrorMessage("Lottie text cannot be empty")
      return
    }

    if (typeof text !== "string") {
      setErrorMessage("Lottie text must be a string")
      return
    }

    setLottie(text)
  }

  // ui handlers

  const onTabsSelect = key => setCurrentTab(key)
  const onWarningTypeChange = checked => setWarningType(checked)
  const onWarningPropertyChange = checked => setWarningProperty(checked)

  const onLottieFileChange = e => {
    if (e.target.files.length === 0) {
      setErrorMessage("Please select a valid Lottie file")
      return
    }

    setLottieFile(e.target.files[0])
  }

  const resetStates = () => {
    setLottie("")
    setLottieUrl("")
    setLottieFile(null)
    setLottieText("")
    setErrorMessage("")
    if (lottieFileInputRef.current) lottieFileInputRef.current.value = ""
  }

  const onValidateBtnClick = () => {
    resetStates()

    switch (currentTab) {
      case "url":
        validateLottieUrl(lottieUrl)
        break
      case "file":
        validateLottieFile(lottieFile)
        break
      case "text":
        validateLottieText(lottieText)
        break
      default:
        break
    }
  }

  const onResetBtnClick = () => {
    resetStates()
  }

  // effects

  useEffect(() => {
    if (lottie) {
      validateLottieString(lottie)
    }
  }, [lottie])

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
                    onChange={onLottieFileChange}
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
                onClick={onResetBtnClick}
                disabled={!lottie && !errorMessage}
              >
                reset
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            {!lottie && errorMessage && (
              <Alert variant="danger">{errorMessage}</Alert>
            )}
            {loading && (
              <div className="text-center">
                <Spinner animation="border" role="status" variant="primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {!loading && lottie && (
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
