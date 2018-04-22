import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import { Grid, Card } from "semantic-ui-react";

const styles = {
  layout: {
    textAlign: "center"
  }
};

export default class FoodIndexPage extends React.Component {
  render() {
    return (
      <div style={styles.layout}>
        <h1>an index for food....</h1>
      </div>
    );
  }
}