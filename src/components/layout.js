import * as React from "react"
import { Header } from "./header.js";
import { Footer } from "./footer.js";

const Layout = ({ location, author, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer author={author} />
    </>
  )
}

export default Layout
