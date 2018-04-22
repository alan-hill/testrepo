import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";

import { Grid, Item } from "semantic-ui-react";

export const DocumentationTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      {helmet || ""}

      <Grid>
        <Grid.Row>
          <Grid.Column width={3} style={{backgroundColor: "#F4F6F8"}}></Grid.Column>
          <Grid.Column width={13}>
            <Item>
              <Item.Content>
                <Item.Header>
                  {title}
                </Item.Header>

                <Item.Description>
                  <p>{description}</p>
                  <PostContent content={content} />
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

DocumentationTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const Documentation = ({ data }) => {
  const { markdownRemark: post } = data;
  const helmet = <Helmet title={`${post.frontmatter.title} | Blog`} />

  return (
    <DocumentationTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={helmet}
      title={post.frontmatter.title}
  />
  );
};

Documentation.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Documentation;

export const pageQuery = graphql `
  query DocumentationByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;