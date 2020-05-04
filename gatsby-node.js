const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  
  const result = await graphql(
    `
    {
      allMarkdownRemark(
          sort: {
              fields: [frontmatter___date],
              order: DESC
          }
          limit: 1000
      ) {
          edges {
              node {
                  fields {
                      slug
                  }
                  frontmatter {
                      title
                  }
              }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic('There was a problem loading your projects!');
    return;
  }

  // Create blog posts pages.
  const posts = result.data.blog.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}