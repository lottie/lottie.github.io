import * as React from "react"
import { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Collapse from "react-bootstrap/Collapse"
import ReactMarkdown from "react-markdown"

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <Card className="mb-3 border-0 shadow-sm">
      <Card.Header 
        className="bg-white border-0 py-3"
        style={{ cursor: "pointer" }}
        onClick={onToggle}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-semibold">{question}</h5>
          <span 
            className="fs-4 text-primary"
            style={{ 
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease"
            }}
          >
            +
          </span>
        </div>
      </Card.Header>
      <Collapse in={isOpen}>
        <Card.Body className="pt-0">
          <div className="mb-0 text-muted">
            <ReactMarkdown
              components={{
                a: ({ node, children, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary">
                    {children}
                  </a>
                ),
                code: ({ node, ...props }) => (
                  <code {...props} className="bg-light px-1 rounded" />
                ),
                p: ({ node, ...props }) => (
                  <span {...props} />
                )
              }}
            >
              {answer}
            </ReactMarkdown>
          </div>
        </Card.Body>
      </Collapse>
    </Card>
  )
}

const Faq = ({ title, items }) => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h4 className="h2 mb-4 text-center">{title}</h4>
            {items.map((item, index) => (
              <FAQItem
                key={`faq-item-${index}`}
                question={item.question}
                answer={item.answer}
                isOpen={openItems[index] || false}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faq