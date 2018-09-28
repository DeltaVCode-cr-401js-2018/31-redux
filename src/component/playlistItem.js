import React, { Component } from 'react';
import Form from './playlistForm';
import SongForm from './songForm';

export default class PlaylistItem extends Component {
  deleteObject = () => {
    this.props.handleDelete(this.props.playlist)
  }

  render(){
    return(
      <React.Fragment>
        <div>{this.props.playlist.title}</div>
        <Form handleComplete={this.props.handleComplete} currentPlaylist={this.props.playlist}/>
        <button onClick={this.deleteObject}>Delete</button>
        <SongForm/>
      </React.Fragment>
    )
  }
}