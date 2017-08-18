import React from 'react'
import ReactDom from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players'

const renderPlayers = function(playersList){
  return playersList.map(function(obj) {
    return <p key={obj._id}>{obj.name} has {obj.score} point(s).</p>;
  });
};

const handleSubmit = function(e){
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if(playerName){
    e.target.playerName.value = '';

    Players.insert({
      name: playerName,
      score: 99
    });
  }

};

Meteor.startup(function(){

  Tracker.autorun( function() {

    let players = Players.find().fetch();
    let title = 'Sparsh';
    let name = 'SK';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is the Second Para</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));

  });


});
