import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <Menu>
          <Image 
           as={ Link } exact to='/'
           centered
           src={require('../images/logo.png')}
           size='large'
           /> 
      </Menu>
    )
  }
}
export default Navbar;
