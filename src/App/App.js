import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connections';

// import Auth from '../components/Auth';
import TheNav from '../components/theNav/TheNav';
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

    // const loadComponent = () => {
    //   let componentToLoad = '';
    //   if (authed && singleBoardId.length === 0) {
    //     componentToLoad = <BoardContainer setSingleBoard={this.setSingleBoard}/>;
    //   } else if (authed && singleBoardId.length > 0) {
    //     componentToLoad = <SingleBoard boardId={singleBoardId} setSingleBoard={this.setSingleBoard}/>;
    //   } else {
    //     componentToLoad = <Auth />;
    //   }
    //   return componentToLoad;
    // };

    return (
      <div className="App">
        <TheNav authed={authed}/>
        {/* {loadComponent()} */}
      </div>
    );
  }
}

export default App;
