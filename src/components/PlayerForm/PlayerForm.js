import React from 'react';

import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
    putPlayer: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
  }

state = {
  imageUrl: '',
  name: '',
  position: '',
  number: '',
  area: '',
  isEditing: false,
}

componentDidMount() {
  const { player } = this.props;
  if (player.name) {
    this.setState({
      imageUrl: player.imageUrl,
      name: player.name,
      position: player.position,
      number: player.number,
      area: player.area,
      isEditing: true,
    });
  }
}

imageUrlChange = (e) => {
  e.preventDefault();
  this.setState({ imageUrl: e.target.value });
};

nameChange = (e) => {
  e.preventDefault();
  this.setState({ name: e.target.value });
};

positionChange = (e) => {
  e.preventDefault();
  this.setState({ position: e.target.value });
};

numberChange = (e) => {
  e.preventDefault();
  this.setState({ number: e.target.value });
};

areaChange = (e) => {
  e.preventDefault();
  this.setState({ area: e.target.value });
};

savePlayer =(e) => {
  e.preventDefault();
  const {
    imageUrl,
    name,
    position,
    number,
    area,
  } = this.state;
  const { saveNewPlayer } = this.props;
  const newPlayer = {
    imageUrl,
    name,
    position,
    number,
    area,
    uid: authData.getUid(),
  };
  saveNewPlayer(newPlayer);
}

updatePlayer = (e) => {
  e.preventDefault();
  const { player, putPlayer } = this.props;
  const {
    imageUrl,
    name,
    position,
    number,
    area,
  } = this.state;
  const updatedPlayer = {
    imageUrl,
    name,
    position,
    number,
    area,
    uid: authData.getUid(),
  };
  putPlayer(player.id, updatedPlayer);
}

render() {
  const {
    imageUrl,
    name,
    position,
    number,
    area,
    isEditing,
  } = this.state;

  return (
    <div>
      <div>
        <form className="justify-content-center d-flex flex-wrap row formPlayer">
          <div className="col-lg-6">
            <label htmlFor="player-name"></label>
            <input
              type="text"
              className="form-control playerName"
              id="player-name"
              placeholder="Add New Player Name Here"
              value={name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="player-image-url"></label>
            <input
              type="text"
              className="form-control playerImg"
              id="player-image-url"
              placeholder="Insert Image Url Here"
              value={imageUrl}
              onChange={this.imageUrlChange}
              />
          </div>
          <div className="form-group col-lg-2">
            <label htmlFor="player-position"></label>
            <input
              type="text"
              className="form-control playerPosition"
              id="player-position"
              placeholder="Position"
              value={position}
              onChange={this.positionChange}
              />
          </div>
          <div className="form-group col-lg-4">
            <label htmlFor="player-Area"></label>
            <input
              type="text"
              className="form-control playerArea"
              id="player-Area"
              placeholder="Position Area"
              value={area}
              onChange={this.areaChange}
              />
              </div>
          <div className="form-group col-lg-2">
            <label htmlFor="player-number"></label>
            <input
              type= "number"
              className="form-control playerNumber"
              id="player-number"
              placeholder="Number"
              value= {number}
              onChange={this.numberChange}
              />
          </div>
          <div className="col-lg-2 saveMargin">
            { isEditing
              ? <button className="btn btn-warning saveBtn" onClick={this.updatePlayer}>Update</button>
              : <button className="btn btn-warning saveBtn" onClick={this.savePlayer}>Save</button>
            }
          </div>
      </form>
    </div>
  </div>
  );
}
}
export default PlayerForm;
