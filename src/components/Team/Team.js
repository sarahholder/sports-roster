import React from 'react';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Players from '../Players/Players';

import './team.scss';

class Team extends React.Component {
  state = {
    roster: [],
    area: [],
  }

getRoster = () => {
  playerData.getPlayerByUid(authData.getUid())
    .then((roster) => this.setState({ roster }))
    .catch((err) => console.error('Error showing roster: ', err));
}

componentDidMount() {
  this.getRoster();
}

removePlayer = (playerId) => {
  playerData.deletePlayer(playerId)
    .then(() => this.getRoster())
    .catch((err) => console.error('Could not delete player: ', err));
};

render() {
  const { roster } = this.state;
  const makeRoster = roster.map((player) => (<Players key={player.id} player={player} removePlayer={this.removePlayer}/>));

  return (
    <div className="Team">
      <img className="img-fluid" width="100%" src="https://utsports.com/images/2019/8/7/2020_Schedule_Release_Web.jpg?width=1061&height=597&mode=crop" alt="ut football schedule "/>
      <div className="d-flex flex-wrap m-2 justify-content-center">
        {makeRoster}
      </div>
    </div>
  );
}
}


export default Team;
