import React, { useState, useEffect } from "react"

const LottiePlayerSSR = ({ children, ...props }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div style={props.style} className={props.className} />
  }

  const LottiePlayer = require("lottie-react").default
  return <LottiePlayer {...props} />
}

export default LottiePlayerSSR