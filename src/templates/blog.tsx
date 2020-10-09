import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

const Blog = (props: { data: { markdownRemark: { frontmatter: { title: string }, html: string } } }) => {
  console.log(props);
  return (
    <Layout>
      <Link to="/blog">
        <p>back</p>
      </Link>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  );
};

export default Blog;
