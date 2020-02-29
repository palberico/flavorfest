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
  Divider,
  Card,
  List, 
  Menu,
} from 'semantic-ui-react';
import Zoom from 'react-reveal/Zoom';

import Contact from './modals/Contact';
import AboutUs from './modals/AboutUs';
import Privacy from './modals/Privacy';
import Sponsor from './Sponsors';
import ContactForm from './ContactForm';

import venue1 from '../images/venue1.jpg';
import venue2 from '../images/venue2.jpg';
import venue3 from '../images/venue3.jpg';
import logo from '../images/logo.png';

import { Carousel } from 'react-responsive-carousel';


class Home extends Component {

//Form code follows

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      email: ''
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
    email: this.state.email
  }
    applicantsRef.push(applicant);
    this.setState({
      firstName: '',
      lastName: '',
      company: '',
      email: ''
    });
  }

//Modal code follows

state = { modalOpen: false }

handleOpen = () => this.setState({ modalOpen: true })
handleClose = () => this.setState({ modalOpen: false })

//Menu code follows

state = { activeItem: 'home' }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })



render() {

//Menu code follows

const { activeItem } = this.state


  return (
    <div>

{/* Hero text and images code follows */}

{/* Todo: add carousel */}

{/* <Grid.Row columns={1} equal>
      <Grid.Column>

      <Menu pointing secondary >
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
        </Menu.Menu>
      </Menu>

      </Grid.Column>
    </Grid.Row>   */}

      <Grid stackable>
        <Grid.Row columns={1}>
          <Grid.Column>
           <Segment basic>
            <Zoom>
            <Image 
              src={logo}
              centered 
              alt='Portland Flavor Fest Logo'
            />
            </Zoom>
           </Segment>
          </Grid.Column>
        </Grid.Row>

{/* Short about us code follows */}

        <Grid.Row columns={1}>
          <Grid.Column>
            <br /><br />
              <Container>
                <Header as='h1' style={styles.festRed}>What is Flavor Fest?</Header>
                  <Header as='h2'>
                    Flavor Fest is a flavorful festival of condiments. We are looking
                    for food and condiment vendors who want to team up and showcase
                    their products. Give the people what they want. Blah, blah, blah,
                    Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
                    Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
                  </Header>
                  <Header as='h2'>
                    Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
                    Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
                    Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
                  </Header>
                {/* <Button basic fluid color='blue' as={ Link } to='/about'>
                  Find Out More About Us
                </Button> */}
              </Container>
              <br /><br />
            </Grid.Column>
          </Grid.Row>

      <Divider />

{/* Why we are different code follows */}



          <Grid.Row columns={3} equal color='black'>

            <Grid.Column>
              <Segment basic>
              <Image 
                floated='right'
                style={styles.hero2} 
                src={venue2}  
              />
               </Segment>
            </Grid.Column>
              <Grid.Column>
              <Segment basic>
              <Image 
                // floated='right'
                style={styles.hero2} 
                src={venue1}  
              />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
              <Image 
                floated='left'
                style={styles.hero2} 
                src={venue3}  
              />
               </Segment>
               </Grid.Column>
            {/* <Grid.Column verticalAlign='middle'>
              <Header as='h1' style={styles.festRed}>Condiment + Food = Condimate</Header>
                <List bulleted size='big'>
                  <List.Item>Blah, blah, blah, blah, blah, blah...</List.Item>
                  <List.Item>Blah, blah, blah, blah, blah, blah...</List.Item>
                  <List.Item>Blah, blah, blah, blah, blah, blah...</List.Item>
                  <List.Item>Blah, blah, blah, blah, blah, blah...</List.Item>
                  <List.Item>Blah, blah, blah, blah, blah, blah...</List.Item>
                  <List.Item>Blah, blah, blah, blah, blah, blah...</List.Item>
                </List>   */}
                  {/* <Button fluid color='orange' as={ Link } to='/employers'>Employers - Find Out More</Button> */}
              {/* </Grid.Column>   */}
           
            </Grid.Row>    

         
<Divider/> 
<Grid.Row columns={1}>
        <Grid.Column>
        <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Condiment + Food = Condimate

        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
          Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
          Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
        </p>
        <p style={{ fontSize: '1.33em' }}>
          Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
          Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
          Blah, blah, blah, Blah, blah, blah, Blah, blah, blah, Blah, blah, blah,
        </p>
        {/* <Button as='a' size='large'>
          <Contact />
        </Button> */}
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <Header>Sponsored By</Header>
        </Divider>
        </Container>
    </Segment>
        </Grid.Column>
  </Grid.Row>


  <Grid.Row columns={1} equal inverted>
  <Grid.Column>
      
              <Sponsor/>
           
            </Grid.Column>
    </Grid.Row>

{/* Footer code follows */}

              <Grid.Row columns={1} color='black'>
        <Grid.Column>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <List inverted celled horizontal>
                <List.Item><AboutUs /></List.Item>
                <List.Item as={ Link } to="/admin">Admin</List.Item>
                <List.Item><Contact /></List.Item>
                <List.Item><Privacy /></List.Item>
                <List.Item as={ Link } to="/unsubscribe">Unsubscribe</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <List inverted celled horizontal>
                <List.Item>
                  <Icon name='facebook' />
                   Be Social - Follow Us
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <List inverted celled horizontal>
              <List.Item href='mailto:info@flavorfest.com'>
                  <Icon name='mail outline' />
                  info@flavorfest.com
                </List.Item>
              </List>
            </Grid.Column>
            <br /><br />
            <Container centered>
            <Grid.Row>
            <Grid.Column>
              <List inverted celled horizontal>
                <List.Item>
                  <Header as="h6">
                  <Icon name='copyright outline' />
                   Flavor Fest, LLC 2019 - Portland, Oregon
                   </Header>
                </List.Item>
              </List>
            </Grid.Column>
            </Grid.Row>
            </Container>
          </Grid.Row>
                </Grid>
               </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div> 
    );
  }
}

export default Home;

const styles = {
  // hero: {
  //   width: '750px',
  //   height: 'auto',
  //   margin: '0 auto',
  // },
  hero2: {
    width: '450px',
    height: 'auto',
    margin: '0 auto',
  },
  festRed: {
    color: 'rgba(169, 1, 6, 255 )',
  },
  hero: {
  
    minHeight: 700,
    padding: '1em 0em'
    },
  font: {
    fontSize:'50px'
  },
}