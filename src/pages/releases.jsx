import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import config from '../../data/SiteConfig';
import PostListing from '../components/PostListing/PostListing';
import Edgeworx from "../components/Egdeworx/Edgeworx";

class ReleasesPage extends Component {
  render() {
    const { children, data } = this.props;

    if (!data) {
      return null;
    }

    const postEdges = data.allMarkdownRemark.edges;

    return (
      <Layout location="releases">
        <div className="container">
          <Helmet title={`Releases | ${config.siteTitle}`} />

          <PostListing postEdges={postEdges} />

          {children}
        </div>

        <Edgeworx />
      </Layout>
    );
  }
}

export default ReleasesPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
        filter: {frontmatter: {type: { eq: "releases" }} }
    ){
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`;