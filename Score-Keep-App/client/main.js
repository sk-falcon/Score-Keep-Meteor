import React from 'react'
import ReactDom from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players'
import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'

const renderPlayers = (playersList) => {
  return playersList.map((obj) => {
    return (
      <p key={obj._id}>
        {obj.name} has {obj.score} point(s).
        <button onClick={() => Players.update({_id: obj._id},{$inc:{score: 1} })}>+1</button>
        <button onClick={() => Players.update({_id: obj._id},{$inc:{score: -1} })}>-1</button>
        <button onClick={() => Players.remove({_id: obj._id})}>X</button>
      </p>
    );
  });
};

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if(playerName){
    e.target.playerName.value = '';

    Players.insert({
      name: playerName,
      score: 0
    });
  }

};

Meteor.startup(() => {

  Tracker.autorun( () => {

    let players = Players.find().fetch();

    let jsx = (
      <div>
        <TitleBar/>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
        <AddPlayer/>
      </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));

  });


});
