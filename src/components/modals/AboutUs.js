import React, { Component } from 'react';
import { 
  Button, 
  Modal, 
  Header, 
  Icon, 
  Image, 
  List 
} from 'semantic-ui-react';


class AboutUs extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })   
    
  render() {
    return (
      <Modal 
        trigger={<List.Item as='a'onClick={this.handleOpen}>About Us</List.Item>}
        open={this.state.modalOpen}
        onClose={this.handleClose}>
          <Modal.Header>
            {/* <Image 
              wrapped 
              size='medium' 
              src={require('../../images/whoop.png')} 
            /> */}
          </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header as='h3'>
                  <Header.Content>
                    Whoop Jobs was created by three Talent Acquisition professionals with over 
                    20 years of combined experienced recruiting for various Utah Contact Centers.  
                    We have worked with many third-party talent 
                    agencies and found they fell short with what they promise. Whoop Jobs was born
                    in 2018 after we decided there was need for specialized recruiting for Contact Centers.
                  </Header.Content>
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

export default AboutUs;