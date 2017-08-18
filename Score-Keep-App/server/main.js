import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(function(){
  Players.insert({
    name: 'Player 3',
    score: 100
  })

  console.log(Players.find().fetch());

});
