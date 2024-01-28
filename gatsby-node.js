/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for news post
const newsPost = path.resolve(`./src/templates/news-post.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown files sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
            contentType
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your news posts`,
      result.errors
    )
    return
  }

  const files = result.data.allMarkdownRemark.nodes

  // Create templates
  // But only if there's at least one markdown file found at "content" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (files.length === 0) return

  files.forEach((file, index) => {
    const { id, fields } = file
    const { slug, contentType } = fields

    switch (contentType) {
      case "news":
        const previousPostId = index === 0 ? null : files[index - 1].id
        const nextPostId =
          index === files.length - 1 ? null : files[index + 1].id

        createPage({
          path: slug,
          component: newsPost,
          context: {
            id,
            previousPostId,
            nextPostId,
          },
        })

        break
      case "templates":
        const parsedSlug = path.parse(slug)
        const component = path.resolve(`./src/templates/${parsedSlug.name}.js`)

        createPage({
          path: slug,
          component: component,
          context: {
            id,
          },
        })

        break
      default:
        break
    }
  })
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({ node, getNode })
    const { sourceInstanceName } = getNode(node.parent)

    const slug =
      sourceInstanceName && sourceInstanceName === "news" ? "/news" : ""

    createNodeField({
      name: `slug`,
      node,
      value: `${slug}${relativeFilePath}`,
    })

    createNodeField({
      node,
      name: "contentType",
      value: sourceInstanceName,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // news posts are stored inside "content/news" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      urls: Urls
    }

    type Author {
      name: String
    }

    type Urls {
      site: String
      specRepo: String
      spec: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
      contentType: String
    }
  `)
}
