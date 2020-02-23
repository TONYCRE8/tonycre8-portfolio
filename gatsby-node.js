const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  
  const result = await graphql(
    `
    {
      blog:allMarkdownRemark(
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
        projectItems: allProjectsJson {
            edges {
                node {
                    slug
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

  // Create project pages
  const projects = result.data.projectItems.edges;

  projects.forEach(({ node: project }) => {
    const slug = project.slug;

    actions.createPage({
      path: `${slug}`,
      component: require.resolve('./src/templates/project-page.js'),
      context: { slug },
    });
  });
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