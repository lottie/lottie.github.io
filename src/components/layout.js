import * as React from "react"
import { Header } from "./header.js"
import { Footer } from "./footer.js"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
