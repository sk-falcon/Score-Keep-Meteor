import React from 'react'
import Player from './Player'

export default class PlayerList extends React.Component{
  renderPlayers () {

    if(this.props.players.length === 0) {
      return <p>Add a new player to get started</p>

    } else {
      return this.props.players.map((player) => {
      return <Player key = {player._id} player = {player}/>;
    });}
  }

  render(){
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );

  }
}
