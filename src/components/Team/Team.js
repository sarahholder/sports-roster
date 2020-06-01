import React from 'react';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Players from '../Players/Players';
import PlayerForm from '../PlayerForm/PlayerForm';

import './team.scss';

class Team extends React.Component {
  state = {
    roster: [],
    formOpen: false,
    editPlayer: {},
  }

putPlayer = (playerId, updatedPlayer) => {
  playerData.updatePlayer(playerId, updatedPlayer)
    .then(() => {
      this.getRoster();
      this.setState({ formOpen: false, editPlayer: {} });
    })
    .catch((err) => console.error('unable to update player', err));
}

editAPlayer = (player) => {
  this.setState({ editPlayer: player, formOpen: true });
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
}

saveNewPlayer = (newPlayer) => {
  playerData.saveNewPlayer(newPlayer)
    .then(() => {
      this.getRoster();
      this.setState({ formOpen: false });
    })
    .catch((err) => console.error('unable to save new player: ', err));
}

render() {
  const { roster, formOpen, editPlayer } = this.state;
  const { playerId } = this.props;

  const makeRoster = roster.map((player) => (<Players key={player.id} player={player} removePlayer={this.removePlayer} editAPlayer={this.editAPlayer}/>));

  return (
    <div className="Team">
      <button className="btn btn-warning m-2 mt-3" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus"></i> New Player</button>
      { formOpen ? <PlayerForm playerId={playerId} saveNewPlayer={this.saveNewPlayer} player={editPlayer} putPlayer={this.putPlayer}/> : ''}
      { formOpen ? <button className="btn btn-warning m-2 mt-3" onClick={() => this.setState({ formOpen: false, editPlayer: {} })}>Close</button> : ''}
      <div className="d-flex flex-wrap m-2 justify-content-center">
        {makeRoster}
      </div>
    </div>
  );
}
}


export default Team;
