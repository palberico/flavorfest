import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <Menu inverted>
        <Link exact to='/'>
          <Menu.Item header>
          <Image 
           src={require('../images/logo.png')}
           size='large'
           />
          </Menu.Item>
        </Link>
        {/* <Link exact to='/about'>
          <Menu.Item as='h3' name='aboutUs'/>
        </Link> */}
      </Menu>
    )
  }
}
export default Navbar;
