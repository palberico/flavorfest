import React, { Component } from 'react';
import firebase from '../firebase.js';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Segment, 
  Form, 
  Container, 
  Modal, 
  Header, 
  Icon, 
  Image, 
  Grid, 
} from 'semantic-ui-react';

import logo from '../images/logo.png';

import Bounce from 'react-reveal/Bounce';

const countries = [
  { key: 'United States', text: 'United States', value: 'US' },
  { key: 'Canada', text: 'Canada', value: 'CA' },
]

const states = [
  { key: 'Alabama', text: 'Alabama', value: 'AL' },
  { key: 'Alaska', text: 'Alaska', value: 'AK' },
  { key: 'Arizona', text: 'Arizona', value: 'AZ' },
  { key: 'Arkansas', text: 'Arkansas', value: 'AR' },
  { key: 'California', text: 'California', value: 'CA' },
  { key: 'Colorado', text: 'Colorado', value: 'CO' },
  { key: 'Connecticut', text: 'Connecticut', value: 'CT' },
  { key: 'Delaware', text: 'Delaware', value: 'DE' },
  { key: 'District of Columbia', text: 'District of Columbia', value: 'DC' },
  { key: 'Florida', text: 'Florida', value: 'FL' },
  { key: 'Georgia', text: 'Georgia', value: 'GA' },
  { key: 'Hawaii', text: 'Hawaii', value: 'HI' },
  { key: 'Idaho', text: 'Idaho', value: 'ID' },
  { key: 'Illinois', text: 'Illinois', value: 'IL' },
  { key: 'Indiana', text: 'Indiana', value: 'IN' },
  { key: 'Iowa', text: 'Iowa', value: 'IA' },
  { key: 'Kansas', text: 'Kansas', value: 'KS' },
  { key: 'Kentucky', text: 'Kentucky', value: 'KY' },
  { key: 'Louisiana', text: 'Louisiana', value: 'LA' },
  { key: 'Maine', text: 'Maine', value: 'ME' },
  { key: 'Maryland', text: 'Maryland', value: 'MD' },
  { key: 'Massachusetts', text: 'Massachusetts', value: 'MA' },
  { key: 'Michigan', text: 'Michigan', value: 'MI' },
  { key: 'Minnesota', text: 'Minnesota', value: 'MN' },
  { key: 'Mississippi', text: 'Mississippi', value: 'MS' },
  { key: 'Missouri', text: 'Missouri', value: 'MO' },
  { key: 'Montana', text: 'Montana', value: 'MT' },
  { key: 'Nebraska', text: 'Nebraska', value: 'NE' },
  { key: 'Nevada', text: 'Nevada', value: 'NV' },
  { key: 'New Hampshire', text: 'New Hampshire', value: 'NH' },
  { key: 'New Jersey', text: 'New Jersey', value: 'NJ' },
  { key: 'New Mexico', text: 'New Mexico', value: 'NM' },
  { key: 'New York', text: 'New York', value: 'NY' },
  { key: 'North Carolina', text: 'North Carolina', value: 'NC' },
  { key: 'North Dakota', text: 'North Dakota', value: 'ND' },
  { key: 'Ohio', text: 'Ohio', value: 'OH' },
  { key: 'Oklahoma', text: 'Oklahoma', value: 'OK' },
  { key: 'Oregon', text: 'Oregon', value: 'OR' },
  { key: 'Pennsylvania', text: 'Pennsylvania', value: 'PA' },
  { key: 'Rhode Island', text: 'Rhode Island', value: 'RI' },
  { key: 'South Carolina', text: 'South Carolina', value: 'SC' },
  { key: 'South Dakota', text: 'South Dakota', value: 'SD' },
  { key: 'Tennessee', text: 'Tennessee', value: 'TN' },
  { key: 'Texas', text: 'Texas', value: 'TX' },
  { key: 'Utah', text: 'Utah', value: 'UT' },
  { key: 'Vermont', text: 'Vermont', value: 'VT' },
  { key: 'Virginia', text: 'Virginia', value: 'VA' },
  { key: 'Washington', text: 'Washington', value: 'WA' },
  { key: 'West Virginia', text: 'West Virginia', value: 'WV' },
  { key: 'Wisconsin', text: 'Wisconsin', value: 'WI' },
  { key: 'Wyoming', text: 'Wyoming', value: 'WY' },
]

class ContactForm extends Component {

//Form code follows

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      address: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      web: '',
      insta: '',
      face: '',
      product: '',
      source: '',
      price: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange = name => (e, { value }) => this.setState({ [name]: value });

handleSubmit(e) {
  e.preventDefault();
  const applicantsRef = firebase.database().ref('applicants');
  const applicant = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    company: this.state.company,
    email: this.state.email,
    phone: this.state.phone,
    address: this.state.address,
    line2: this.state.line2,
    city: this.state.city,
    state: this.state.state,
    zip: this.state.zip,
    country: this.state.country,
    web: this.state.web,
    insta: this.state.insta,
    face: this.state.face,
    product: this.state.product,
    source: this.state.source,
    price: this.state.price,
  }
    applicantsRef.push(applicant);
    this.setState({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      address: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      web: '',
      insta: '',
      face: '',
      product: '',
      source: '',
      price: '',
    });
  }

//Modal code follows

state = { modalOpen: false }

handleOpen = () => this.setState({ modalOpen: true })
handleClose = () => this.setState({ modalOpen: false })


render() {
  return (

<Container>
{/* Contact form code follow */}
      <Grid stackable>
      <Grid.Row columns={1} color='red'>
        <Grid.Column>
          <Segment>
            <Bounce left>
              <Image 
                src={logo}
                size='large'
                centered 
                alt='Portland Flavor Fest Logo'
              />
            </Bounce>
            <Header as='h2' textAlign='left'>Vendor Application</Header>
            <Header as='h3' textAlign='left'>
            
              Thrive Sauce Co. presents Sense of Taste, a food focused market featuring
              all your favorite treats! This event has a similar set up to the PNM with both 
              hot food vendors and trucks outside and food purveyors, retail, and other F&B 
              related products inside.
                <br /><br />
              At the event folks can enjoy live music, entertainment, demos, educational breakout 
              sessions and an opportunity to meet the makers of their favorite products. We 
              anticipate this crowd to be similar to the PNM crowd as they are coming to purchase 
              and participate.
                <br /><br />
              This is a nonprofit event to insure our community can spend their money on their 
              favorite products and makers rather than on ticket fees. Snack Fest brings awareness 
              to the communty around food and all the amazing food purveyors in the PNW.
                <br /><br />
              The event is open to all ages and free to enter. Vendors can charge for samples or 
              provide them for free.
                <br /><br />
              Submitted applications will receive an auto email confirmation, this email confirms 
              that we have received your application, it does not mean you have been accepted as a 
              vendor for the event. Please add info@snackfestpdx.com to your address book so our 
              acceptance email doesn't go to your spam box.

            </Header>
            <br />
          <Form success onSubmit={this.handleSubmit} stackable>
            <Segment piled>
              <Header as='h3'>Contact Info</Header>
           
          <Form.Group widths='equal'>
            <Form.Field>
              <label>First Name</label>
                <Form.Input
                  placeholder='First Name'
                  onChange={this.handleChange("firstName")} 
                  value={this.state.firstName}
                />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                    <Form.Input
                      placeholder='Last Name'
                      onChange={this.handleChange("lastName")} 
                      value={this.state.lastName}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Field>
                  <label>Company</label>
                    <Form.Input
                      placeholder='Company Name'
                      onChange={this.handleChange("company")} 
                      value={this.state.company}
                    />
                </Form.Field>
                <Form.Group widths='equal'>
                <Form.Field>
                  <label>Email</label>
                    <Form.Input
                      placeholder='email@senseoftastepdx.com'
                      onChange={this.handleChange("email")} 
                      value={this.state.email}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Phone Number</label>
                    <Form.Input
                      placeholder='Phone Number'
                      onChange={this.handleChange("phone")} 
                      value={this.state.phone}
                    />
                </Form.Field>
                </Form.Group>
                </Segment>

                <Segment piled>
                  <Header as='h3'>Address</Header>
                <Form.Group widths='equal'>
                <Form.Field>
                  <label>Street Address</label>
                    <Form.Input
                      placeholder='Street Address'
                      onChange={this.handleChange("address")} 
                      value={this.state.address}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Address Line 2</label>
                    <Form.Input
                      placeholder='Optional'
                      onChange={this.handleChange("line2")} 
                      value={this.state.line2}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Field>
                  <label>City</label>
                    <Form.Input
                      placeholder='City'
                      onChange={this.handleChange("city")} 
                      value={this.state.city}
                    />
                </Form.Field>
                <Form.Field>
                  <label>State/Providence</label>
                    <Form.Dropdown
                      placeholder='State/Providence'
                      search
                      selection
                      options={states}
                      onChange={this.handleChange("state")} 
                      value={this.state.state}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Postal/Zip Code</label>
                    <Form.Input
                      placeholder='Postal/Zip Code'
                      onChange={this.handleChange("zip")} 
                      value={this.state.zip}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Field>
                  <label>Country</label>
                    <Form.Dropdown
                      placeholder='Country' 
                      search 
                      selection 
                      options={countries} 
                      onChange = {this.handleChange("country")}
                      value = {this.state.country}
                    />
                </Form.Field>
                  </Segment>

                <Segment piled>
                  <Header as='h3'>Social Links</Header>
                <Form.Group widths='equal'>
                <Form.Field>
                  <label>Website</label>
                    <Form.Input
                      icon='world' 
                      iconPosition='left'
                      placeholder='Link to Website'
                      onChange={this.handleChange("web")} 
                      value={this.state.web}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Instagram</label>
                    <Form.Input
                      icon='instagram' 
                      iconPosition='left'
                      placeholder='Link to Instagram'
                      onChange={this.handleChange("insta")} 
                      value={this.state.insta}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Facebook</label>
                    <Form.Input
                      icon='facebook' 
                      iconPosition='left'
                      placeholder='Link to Facebook'
                      onChange={this.handleChange("face")} 
                      value={this.state.face}
                    />
                </Form.Field>
                </Form.Group>
                </Segment>

                <Segment piled>
                  <Header as='h3'>Product Info</Header>
                <Form.Field>
                  <label>Product</label>
                    <Form.TextArea
                      placeholder='Tell us about your product.'
                      onChange={this.handleChange("product")} 
                      value={this.state.product}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Source</label>
                    <Form.TextArea
                      placeholder='Give examples of where you source and/or create your products.'
                      onChange={this.handleChange("source")} 
                      value={this.state.source}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Price Range</label>
                    <Form.Input
                      placeholder='Price Range of Goods'
                      onChange={this.handleChange("price")} 
                      value={this.state.price}
                    />
                </Form.Field>
                </Segment>

{/* Modal Code Follows */}

                <Modal 
                  trigger={<Button onClick={this.handleOpen}>Submit</Button>} 
                  open={this.state.modalOpen}
                  onClose={this.handleClose}
                  basic
                  size='small'
                >
                  <Header icon='thumbs up' content='We got you!' />
                    <Modal.Content>
                      <p>
                        Thank you for submitting your contact information. A representative from Flavor Fest will be in touch shortly!
                      </p>
                    </Modal.Content>
                   <Modal.Actions>
                   <Link exact to='/'>
                     <Button color='red' onClick={this.handleClose} inverted>
                       <Icon name='checkmark' /> Home
                     </Button>
                   </Link>
                   </Modal.Actions>
                </Modal>
              </Form>
              </Segment>
              </Grid.Column>
              </Grid.Row>
</Grid>
              </Container>
     
    );
  }
}

export default ContactForm;

const styles = {
  festRed: {
    color: 'rgba(169, 1, 6, 255 )',
  },
}

