import React, { Component } from 'react';
import { 
  Image,
  Grid,
  Card,
} from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import thrive from '../images/thrivelogo.png';
import avila from '../images/avila.png';
import hoss from '../images/hoss.png';




class Sponsors extends Component {
    
  render() {
        return (
     <Grid stackable>
      <Grid.Row columns={3}>
        <Grid.Column>
        <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card} color='red'> 
              <Image 
                // floated='right'
                src={avila}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Avila Gorilla</Card.Header> 
            <Card.Meta>Seattle, Washington</Card.Meta> 
            <Card.Description>Matt Avila founded Gorilla Sauces LLC in 2017 out of the necessity to find the perfect sauce for every dish.</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>
      
      <Grid.Column>
      <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={thrive}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Thrive Sauce Co</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Thrive Sauce Co sauce is the best sauce in the world. Oh and the owner is fucking hot, but I say that too much apparently!</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>

      <Grid.Column>
      <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={hoss}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Hoss Soss</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Our mission at Hoss Soss is to create unforgettable sauces that are packed with addictive flavors first – the flame that follows is simply an added bonus!</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>
      </Grid.Row>

      {/* <Grid.Row columns={3}>
        <Grid.Column>
        <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={thrive}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Thrive Sauce Co</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Thrive Sauce Co sauce is the best sauce in the world.</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>
      
      <Grid.Column>
      <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={thrive}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Thrive Sauce Co</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Thrive Sauce Co sauce is the best sauce in the world.</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>

      <Grid.Column>
      <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={thrive}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Thrive Sauce Co</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Thrive Sauce Co sauce is the best sauce in the world.</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
        <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={thrive}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Thrive Sauce Co</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Thrive Sauce Co sauce is the best sauce in the world.</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>
      
      <Grid.Column>
      <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={thrive}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Thrive Sauce Co</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Thrive Sauce Co sauce is the best sauce in the world.</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>

      <Grid.Column>
      <Flippy
          flipOnHover={true}
          flipOnClick={false} 
          flipDirection="horizontal" 
          ref={(r) => this.flippyHorizontal = r} 
        >
          
          <FrontSide>
            <Card centered style={styles.card}> 
              <Image 
                // floated='right'
                src={thrive}  
            />
            </Card>
        </FrontSide>
        <BackSide>
          <Card centered>
            <Card.Content>
            <Card.Header>Thrive Sauce Co</Card.Header> 
            <Card.Meta>Portland, Oregon</Card.Meta> 
            <Card.Description>Thrive Sauce Co sauce is the best sauce in the world.</Card.Description>
            </Card.Content>
          </Card> 
        </BackSide>
      </Flippy> 
      </Grid.Column>
      </Grid.Row> */}


      </Grid>
      
    );
  }
}

export default Sponsors;

const styles = {
      hero2: {
        width: '200px',
        height: 'auto',
        margin: '0 auto',
      },
      festRed: {
        color: 'rgba(169, 1, 6, 255 )',
      },
      font: {
        fontSize:'50px'
      },
      card: {
            width: '300px'
          },
    }