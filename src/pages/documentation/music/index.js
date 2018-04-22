import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import {Grid, Card} from "semantic-ui-react";

const styles = {
  layout: {
    textAlign: "center"
  }
};

export default class MusicIndexPage extends React.Component {
  render() {
    return (
      <div style={styles.layout}>
        <h1>an index for music....</h1>
      </div>
    );
  }
}
