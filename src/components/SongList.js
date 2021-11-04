import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//Sin importar Component como un named import
//class SongList extends React.Component {}

//Importando Component como un named import
class SongList extends Component {
  renderList() {
    //Helper function
    return this.props.songs.map((song) => {
      //Return de afuera, retornará un Array
      return (
        //Retornará JSX
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //this.props === { songs: state.songs };
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // Para confirmar que cambia el state al hacer click en el botón
  console.log(state);

  // state es toda la data de la aplicación
  // state es un objeto con 2 keywords: songs y selectedSong
  // Así se le pasa la información necesaria como props al componente:
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong, //Es lo mismo que --> selectSong: selectSong
})(SongList);
