import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Blog Page, later on this page will be some posts, trust me</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(
          (edge: { node: { frontmatter: { title: string }; fields: { slug: string } } }) => (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link>
            </li>
          ),
        )}
      </ul>
    </Layout>
  );
};

export default BlogPage;
