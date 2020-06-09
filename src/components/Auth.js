import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-dark login" onClick={this.loginClickEvent}><i class="m-1 fab fa-google"></i><i class="m-1 fas fa-sign-in-alt"></i></button>
        <img className="img-fluid" width="100%" src="https://utsports.com/images/2019/8/7/2020_Schedule_Release_Web.jpg?width=1061&height=597&mode=crop" alt="ut football schedule "/>
      </div>
    );
  }
}

export default Auth;
