import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { Grid, Card } from "semantic-ui-react";

const styles = {
  layout: {
    textAlign: "center"
  },

  welcome: {
    paddingTop: 25,
    width: 700,
    margin: "0 auto"
  },

  welcomeText: {
    fontSize: 16
  },

  docIndex: {
    paddingTop: 25
  }
}

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div style={styles.layout}>
        <div style={styles.welcome}>
          <h3>Documentation Demo</h3>
          <p style={styles.welcomeText}>This is a demo using Netlify CMS and GatsbyJS to build a documentation site with live changes.<br />
             Just sign in with your Github account and changes will be published to github.com/alan_hill/testrepo.<br />
             These changes will then be reflected on ...herokuapp.com.
          </p>
        </div>
        <div style={styles.docIndex}>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column><h3>Current Docs</h3></Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3} centered>
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'documentation')
                .map(({ node: post }) => (
                  <Grid.Column key={post.id}>
                    <Card href={post.fields.slug}>
                      <Card.Content>
                        <Card.Header>
                          {post.frontmatter.title}
                        </Card.Header>
                        <Card.Description>
                          <p>{post.description}</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
          }
        }
      }
    }
  }
`