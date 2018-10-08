export default (state = [], action = {}) => {
  if (action.error) {
    return state;
  }

  switch(action.type) {
    case 'SONG_CREATE':
      return [...state, action.payload];
    case 'SONG_DELETE':
      return state.filter(song => song._id !== action.payload._id);
    case 'SONGS_DELETE':
      return state.filter(song => song.playlist !== action.payload);
    case 'SONG_UPDATE':
      return state.map(song => song._id === action.payload._id? action.payload: song);
    default:
      return state;
  }
}