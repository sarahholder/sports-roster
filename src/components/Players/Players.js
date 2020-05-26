import React from 'react';
import PropTypes from 'prop-types';
import PlayerShape from '../../helpers/propz/playerShape';

import './players.scss';

class Player extends React.Component {
  static propTypes = {
    player: PlayerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player d-flex flex-wrap">
        <div className="card m-2">
          <div className="price-tag d-flex flex-wrap align-content-center justify-content-center">#{player.number}</div>
          <img className="fit card-img-top" src={player.imageUrl} alt={player.name}/>
          <div className="card-body">
            <h3 className="card-title">{player.name}</h3>
            <h4 className="card-text">{player.area}</h4>
            <h5>position: {player.position}</h5>
            <button className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></button>
            <button className="btn btn-dark delete" onClick={this.deletePlayerEvent}><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
