import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connections';

import Auth from '../components/Auth';
import TheNav from '../components/TheNav/TheNav';
import Team from '../components/Team/Team';

import './App.scss';

fbConnection();
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <Team />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <TheNav authed={authed}/>
        {loadComponent()}
        <img className="img-fluid" width="100%" src="https://utsports.com/images/2019/8/7/2020_Schedule_Release_Web.jpg?width=1061&height=597&mode=crop" alt="ut football schedule "/>
      </div>
    );
  }
}

export default App;
