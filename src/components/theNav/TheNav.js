import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import 'firebase/auth';

import './TheNav.scss';

class TheNav extends React.Component {
static propTypes = {
  authed: PropTypes.bool.isRequired,
}

logMeOut = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
}

render() {
  const { authed } = this.props;

  return (
    <div className="MyNavbar">
      <nav className="navbar navbar-light bg-light p-0">
        <div className="navbar-brand p-0 ml-4">UT Volunteers</div>
              {
                authed
                  ? <button className="btn btn-dark logout m-2" onClick={this.logMeOut}>Logout</button>
                  : ''
              }
      </nav>
    </div>
  );
}
}

export default TheNav;
