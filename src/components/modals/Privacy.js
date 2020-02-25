import React, { Component } from 'react';
import { 
  Button, 
  Modal, 
  Header, 
  Image, 
  List 
} from 'semantic-ui-react';


class Privacy extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
    
  render() {
    return (
      <Modal 
        trigger={<List.Item as='a'onClick={this.handleOpen}>Privacy</List.Item>}
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
          <Modal.Description as='h3'>
            <Header>Privacy Policy</Header>
              <p>Whoop Jobs, LLC is committed to protecting the privacy of our applicants, employees and clients. We are also committed to protecting the privacy of our website users by taking every reasonable precaution to protect information that is collected through the use of the site. We do everything possible to then protect that information both online and in our offices.
              <br/><br/>
                 Unless we specifically state otherwise before you submit the information, we will only use your information to:
              <br/>
            <List bulleted>
              <List.Item>Match qualified people for positions/opportunities</List.Item>
              <List.Item>Answer any questions, concerns or comments</List.Item>
              <List.Item>Understand a company’s staffing needs & purchasing habits</List.Item>
              <List.Item>Notify you of special opportunities or promotions</List.Item>
              <List.Item>Find ways to improve Whoop Jobs' services & web user experience</List.Item>
              <List.Item>Contact you to see if there is willingness to participate in a specific event</List.Item>
          </List>
             <br/>
               We commit to not sharing information from our Whoop Jobs website beyond the above bullet points without prior consent.
              <br/><br/>
               If you have any questions or concerns regarding our privacy policy, please contact our corporate office in writing by mail to:
              <br/><br/>
               Whoop Jobs, LLC
              <br/>
               370 South 300 East
              <br/>
               Salt Lake City, Utah
              <br/>
               84108
             </p>
           </Modal.Description>
          </Modal.Content>
        <Modal.Actions>
          <Button color='orange' onClick={this.handleClose} inverted>Home</Button>
        </Modal.Actions>
     </Modal>
   );
  }
}

export default Privacy;