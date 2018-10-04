export default (state = [], action = {}) => {
  switch(action.type) {
    case 'SONG_CREATE':
      return [...state, action.payload];
    case 'SONG_DELETE':
      return state.filter(song => song._id !== action.payload._id);
    case 'SONGS_DELETE':
      return state.filter(song => song.playlist !== action.payload);
    default:
      return state;
  }
}