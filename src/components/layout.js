import * as React from "react"
import { Header } from "./header.js";

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Lottie Animation Community
        {` `}
      </footer>
    </>
  )
}

export default Layout
