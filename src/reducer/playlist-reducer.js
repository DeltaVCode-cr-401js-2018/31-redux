export default (state = [], action = {}) => {
  if (action.error) {
    return state;
  }

  switch(action.type) {
    case 'PLAYLIST_CREATE':
      return [ ...state, action.payload ];
    case 'PLAYLIST_DELETE':
      return state.filter(playlist => playlist._id !== action.payload._id);
    case 'PLAYLIST_UPDATE':
      return state.map(playlist=> playlist._id === action.payload._id ? action.payload : playlist);
    default:
      return state;
  }
  
}