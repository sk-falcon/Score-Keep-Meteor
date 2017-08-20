import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(function(){
  /*Players.insert({
    name: 'Player 4',
    score: 100
  });*/

  // console.log(Players.find().fetch());

  let numbers = [1,2,3,4];
  let newNumbers  = numbers.map((number) => number + 1);
  console.log(newNumbers);

});
