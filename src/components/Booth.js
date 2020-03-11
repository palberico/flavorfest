import React, { Component } from 'react';
import { Form, Checkbox, Header } from 'semantic-ui-react';
import firebase from '../firebase.js';

class Booth extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
      return (
        <Form>
          <Form.Field>
            <Header>Selected value: <b>{this.state.value}</b></Header>
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Choose this'
              name='booth'
              value='this'
              checked={this.state.value === 'this'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Or that'
              name='booth'
              value='that'
              checked={this.state.value === 'that'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      )
    }
  }

  export default Booth;