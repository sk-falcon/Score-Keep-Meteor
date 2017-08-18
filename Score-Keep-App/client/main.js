import React from 'react'
import ReactDom from 'react-dom'
import {Meteor} from 'meteor/meteor'

const players = [
{
  _id: '1',
  name: 'A',
  score: 100
},
{
  _id: '2',
  name: 'B',
  score: 200
},
{
  _id: '3',
  name: 'C',
  score: 300
},
{
  _id: '4',
  name: 'D',
  score: 400
}
];

const renderPlayers = function(playersList){
  return playersList.map(function(obj) {
    return <p key={obj._id}>{obj.name} has {obj.score} point(s).</p>;
  });
};



Meteor.startup(function(){
  let title = 'Sparsh';
  let name = 'SK';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is the Second Para</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDom.render(jsx, document.getElementById('app'));
});
