//Action creator
export const selectSong = (song) => {
  //Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
    /* Quiero devolver la canción seleccionada que llega como argumento */
  };
};
