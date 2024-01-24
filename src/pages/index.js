import * as React from "react"
import { graphql } from "gatsby"

import Button from "react-bootstrap/Button"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({ data, location }) => {
  const author = data.site.siteMetadata?.author

  return (
    <Layout location={location} author={author?.name || ''}>
      home page
      <Button>hi</Button>
    </Layout>
  )
}

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home Page" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
  }
`
