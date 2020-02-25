import React, { Component } from 'react';
import { 
  Button, 
  Modal, 
  Header, 
  Icon, 
  Image, 
  List 
} from 'semantic-ui-react';


class Contact extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
      
  render() {
    return (
      <Modal 
        trigger={<List.Item as='a'onClick={this.handleOpen}>Contact Us</List.Item>}
        open={this.state.modalOpen}
        onClose={this.handleClose}>
          <Modal.Content image>
            {/* <Image 
              wrapped 
              size='medium' 
              src={require('../../images/contact.jpg')} 
            /> */}
          <Modal.Description>
            <Header as='h1' style={styles.whoopBlue}>Get In Touch</Header>
              <Header as='h3'>
                <Icon name='phone'/>
                  <Header.Content>(385) 261-1077</Header.Content>
              </Header>
              <Header as='h3'>
                <Icon name='mail'/>
                  <Header.Content>info@whoopjobs.com</Header.Content>
              </Header>
              <Header as='h3'>
                  <Header.Content>Whoop Jobs, LLC - 370 S. 300 E. Salt Lake City, UT 84111</Header.Content>
              </Header>
          </Modal.Description>
          </Modal.Content>
            <Modal.Actions>
              <Button color='orange' onClick={this.handleClose} inverted>Home</Button>
            </Modal.Actions>
        </Modal>
    );
  }
}

export default Contact;

const styles = {
  whoopBlue: {
    color: 'rgba(0, 8, 255, 255 )',
  },
}