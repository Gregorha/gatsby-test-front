const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blog.tsx');

  const res = await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  res.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        path: `/blog/${slug}`,
        component: blogPostTemplate,
        context: {
          slug,
        },
      });
    },
  );
};
