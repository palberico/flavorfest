import React, { Component } from 'react';
import firebase from '../firebase.js';
import { Table, Popup, Button, Divider, Header, Container, Segment, Modal } from 'semantic-ui-react';
// import Delete from './adminpages/Delete';
// import JobAdmin from './adminpages/JobAdmin';
import Navbar from './Navbar';
import AppCard from './AppCard';
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

        <AppCard />
        
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