import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import NoMatch from './components/NoMatch';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './components/Admin';
// import Jobs from './components/Jobs';
// import Courses from './components/Courses';
// import Employers from './components/Employers';
// import Unsubscribe from './components/Unsubscribe';
import PrivateRoute from './PrivateRoutes';
import { Segment, Loader, Dimmer } from 'semantic-ui-react';
import firebase from './firebase';
import { AuthProvider } from './components/Auth';


class App extends Component {

  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render(){

    const { authenticated, loading } = this.state;

    if (loading) {
      return <Dimmer active><Loader size='large' /></Dimmer>
    }

    return (
      <Segment>
        <br />
        <AuthProvider>
          <Switch>
            <PrivateRoute
              exact
              path="/admin"
              component={Admin}
              authenticated={authenticated}
            />
              <Route exact path='/' component={Home} />
              {/* <Route exact path='/about' component={About} /> */}
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/admin' component={Admin} authenticated={this.state.authenticated} />
              {/* <Route exact path='/unsubscribe' component={Unsubscribe} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/courses' component={Courses} />
              <Route exact path='/employers' component={Employers} /> */}
    
              <Route component={NoMatch} />
              
          </Switch>
        </AuthProvider>
      </Segment>
    );
  }
}



export default App;
