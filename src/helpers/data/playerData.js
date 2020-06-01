import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayerByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/roster.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const playerCard = result.data;
      const roster = [];
      if (playerCard !== null) {
        Object.keys(playerCard).forEach((playerId) => {
          const newPlayer = playerCard[playerId];
          newPlayer.id = playerId;
          roster.push(newPlayer);
        });
      }
      resolve(roster);
    })
    .catch((err) => reject(err));
});


const deletePlayer = (playerId) => axios.delete(`${baseUrl}/roster/${playerId}.json`);

const saveNewPlayer = (newPlayer) => axios.post(`${baseUrl}/roster.json`, newPlayer);

const updatePlayer = (playerId, updatedPlayer) => axios.put(`${baseUrl}/roster/${playerId}.json`, updatedPlayer);

export default {
  getPlayerByUid,
  deletePlayer,
  saveNewPlayer,
  updatePlayer,
};
