import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';


class theNav extends React.Component {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" className="navbar-brand">UT VOLS Roster</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {
                authed
                  ? <button className="navlink btn btn-danger" onClick={this.logMeOut}>Logout</button>
                  : ''
              }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
}

export default theNav;
