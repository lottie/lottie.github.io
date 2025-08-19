import React from "react"
import Card from "react-bootstrap/Card"
import LottiePlayerSSR from "./LottiePlayerSSR"

const LottieCard = ({ title, author, authorUrl, animationData, className = "", style = {} }) => {
  return (
    <Card className={`h-100 ${className}`} style={style}>
      <Card.Body className="d-flex flex-column p-3">
        <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3">
          <LottiePlayerSSR
            animationData={animationData}
            loop={true}
            style={{ width: "120px", height: "120px" }}
          />
        </div>
        <Card.Footer className="bg-transparent border-0 p-0 mt-auto">
          <div className="text-center">
            <h6 className="mb-1 fw-semibold">{title}</h6>
            {author && (
              <small className="text-muted">
                by{" "}
                {authorUrl ? (
                  <a 
                    href={authorUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {author}
                  </a>
                ) : (
                  author
                )}
              </small>
            )}
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default LottieCard