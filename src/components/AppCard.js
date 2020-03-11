import React, { Component } from 'react';
import firebase from '../firebase.js';
import { Link } from 'react-router-dom';
import { Divider, Modal, Button, Card, Header, Segment, Container } from 'semantic-ui-react';


class AppCard extends Component {
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
            email: applicants[applicant].email,
            phone: applicants[applicant].phone,
            address: applicants[applicant].address,
            line2: applicants[applicant].line2,
            city: applicants[applicant].city,
            state: applicants[applicant].state,
            zip: applicants[applicant].zip,
            country: applicants[applicant].country,

            web: applicants[applicant].web,
            insta: applicants[applicant].insta,
            face: applicants[applicant].face,

            product: applicants[applicant].product,
            source: applicants[applicant].source,
            price: applicants[applicant].price,

            power: applicants[applicant].power,
            requests: applicants[applicant].requests,
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
      <Header as='h1' color='orange'>Applicants</Header>
      
      {this.state.applicants.map((applicant) => {
  return (
      <Card fluid color='red'>
        <Card.Content key={applicant.id}>
          <Card.Header>{applicant.firstName} {applicant.lastName}</Card.Header>
          <Card.Description>{applicant.company}</Card.Description><br />
          <Card.Description>Phone: {applicant.phone}</Card.Description>
          <Card.Description>Email: {applicant.email}</Card.Description><br />

          <Card.Description>{applicant.address}</Card.Description>
          <Card.Description>{applicant.line2}</Card.Description>
          <Card.Description>{applicant.city}</Card.Description>
          <Card.Description>{applicant.state}</Card.Description>
          <Card.Description>{applicant.zip}</Card.Description><br />

          {/* <Card.Description>Required Skills: {intake.requiredSkills}</Card.Description>
          <Card.Description>Nice-to-Have Skills: {intake.optionalSkills}</Card.Description>
          <Card.Description>Experience Requirements: {intake.experienceRequirements}</Card.Description>
          <Card.Description>Education Requirements: {intake.educationRequirements}</Card.Description>
          <Card.Description>Background Check: {intake.backgroundRequired}</Card.Description>
          <Card.Description>DMV Check: {intake.dmvRequired}</Card.Description>
          <Card.Description>Drug Screen: {intake.drugRequired}</Card.Description>
          <Card.Description>Reference Check: {intake.referenceRequired}</Card.Description><br />

          <Card.Description>Compensation Range: {intake.compensationRange}</Card.Description>
          <Card.Description>Shift Differential: {intake.shiftDifferential}</Card.Description>
          <Card.Description>Bonus: {intake.bonus}</Card.Description>
          <Card.Description>First Compensation Increase Eligibility: {intake.firstRaise}</Card.Description><br />

          <Card.Description>Benefit Highlight: {intake.benefitHighlights}</Card.Description>
          <Card.Description>PTO Amount: {intake.ptoAmount}</Card.Description>
          <Card.Description>PTO Eligibility: {intake.ptoEligibility}</Card.Description><br />
          
          <Card.Description>Job Interview Type: {intake.interviewType}</Card.Description>
          <Card.Description>Number of Interviews: {intake.numberInterviews}</Card.Description>
          <Card.Description>Number of Site Visits from Interviewing: {intake.siteVisitInterview}</Card.Description><br />
          
          <Card.Description>Training Type: {intake.trainingType}</Card.Description>
          <Card.Description>Training Duration: {intake.trainingDuration}</Card.Description>
          <Card.Description>Schedule During Training: {intake.trainingSchedule}</Card.Description>
          <Card.Description>Regular Schedule: {intake.regularSchedule}</Card.Description><br /> */}
        </Card.Content>
        <Card.Content extra>
        
          <Button color='orange'>
            Edit
          </Button>

          <Modal size='mini' closeIcon
              trigger={<Button color='red' onClick={this.handleOpen}>Delete</Button>}
              open={this.state.handleOpen}
              onClose={this.handleClose}>
            <Modal.Header>Delete Client</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this applicant?</p>
              </Modal.Content>
                <Modal.Actions>
                  <Button positive content='BYE!' onClick={() => this.removeApplicant(applicant.id)}/>
                </Modal.Actions>
            </Modal>

      </Card.Content>
      </Card>
     )
  })}
</div>
    );
  }
}
export default AppCard;

const pop = {
  borderRadius: 5,
  opacity: .96,
  padding: '1.5em',
}