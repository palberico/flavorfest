import React, { Component } from 'react';
import firebase from '../firebase.js';
import { Table, Popup, Button, Divider, Header, Container, Segment, Modal } from 'semantic-ui-react';
// import Delete from './adminpages/Delete';
// import JobAdmin from './adminpages/JobAdmin';
import Navbar from './Navbar';
// import CoursesAdmin from './adminpages/CoursesAdmin';
// import WhoopAdmin from './adminpages/WhoopAdmin';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      applicants: []
    }
  }

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })   

  componentDidMount() {
      const applicantsRef = firebase.database().ref('applicants');
      applicantsRef.on('value', (snapshot) => {
        let applicants = snapshot.val();
        let newState = [];
        for (let applicant in applicants) {
          newState.push({
            id: applicant,
            firstName: applicants[applicant].firstName,
            lastName: applicants[applicant].lastName,
            company: applicants[applicant].company,
            email: applicants[applicant].email
          });
        }
        this.setState({
          applicants: newState
        });
      });
    }

    removeApplicant(applicantId) {
      const applicantRef = firebase.database().ref(`/applicants/${applicantId}`);
      applicantRef.remove();
    }

  render() {
    return (
      <div>
        <Navbar />
        <Segment inverted>
          <Container>
            <Button floated="right" color="orange" onClick={() => firebase.auth().signOut()}>Sign Out</Button>
          </Container>
        </Segment>

        <Header as='h1'>Subscribers</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Company</Table.HeaderCell>
              <Table.HeaderCell>Email Address</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        {this.state.applicants.map((applicant) => {
        
    return (
      <Table.Body key={applicant.id}>
        <Table.Row>
          <Table.Cell>{applicant.firstName}</Table.Cell>
          <Table.Cell>{applicant.lastName}</Table.Cell>
          <Table.Cell>{applicant.company}</Table.Cell>
          <Table.Cell>{applicant.email}
            
          <Modal size='mini' closeIcon
              trigger={<Button circular icon='delete' floated='right' color='orange' onClick={this.handleOpen} />}
              open={this.state.handleOpen}
              onClose={this.handleClose}>
            <Modal.Header>Delete Applicant</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this applicant?</p>
              </Modal.Content>
                <Modal.Actions>
                  <Button positive content='BYE!' onClick={() => this.removeApplicant(applicant.id)}/>
                </Modal.Actions>
            </Modal>

            {/* <Popup
                  trigger={<Button circular icon='delete' floated='right' color='orange' onClick={() => this.removeApplicant(applicant.id)} />}
                  content='Remove Applicant'
                  hideOnScroll
                  style={pop}
                  inverted
                  position='top right'
                /> */}
                
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      )
    })}
      </Table>
        <Divider />
      {/* <Delete /> */}
        <Divider />
      {/* <JobAdmin /> */}
        <Divider />
      {/* <CoursesAdmin /> */}
        <Divider />
      {/* <WhoopAdmin /> */}
        <Divider />  
      <Segment inverted>
        <Container>
          <Button floated="right" color="orange" onClick={() => firebase.auth().signOut()}>Sign Out</Button>
        </Container>
      </Segment>
 </div> 
    );
  }
}

export default Admin;

const pop = {
  borderRadius: 5,
  opacity: .96,
  padding: '1.5em',
}