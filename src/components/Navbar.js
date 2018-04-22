import React from 'react'
import Link from 'gatsby-link'

import { Header, Menu } from "semantic-ui-react";

const styles = {
  navbar: {
    width: "100%"
  },

  menu: {
    borderRadius: 0
  }
}

const Navbar = () => (
  <nav style={styles.navbar}>
    <Menu color="blue" inverted style={styles.menu}>
       <Menu.Item header as={Link} to="/">Gatsby+Netlify Documentation + CMS demo.</Menu.Item>
       <Menu.Item
         name='music'
         as={Link}
         to="/documentation/music"
       >
         Music
       </Menu.Item>

       <Menu.Item
         name='food'
         as={Link}
         to="/documentation/food"
       >
         Food
       </Menu.Item>
     </Menu>
  </nav>
)

export default Navbar