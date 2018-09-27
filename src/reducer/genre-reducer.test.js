import reducer from './genre-reducer';
import { createGenre, deleteGenre } from '../actions/genre-actions';

describe('genre-reducer', ()=> {
  describe('GENRE_CREATE', ()=>{
    it('returns inital state', ()=> {
      let result = reducer();
      expect(result).toEqual([]);
    });
  
    it('returns the state when unknown action is given', () => {
      let state = [{name:'Ethan'}];
      let result = reducer(state);
      expect(result).toBe(state);
    });
  
    it('returns new state with payload added when it recieves GENRE_CREATE action', () => {
      let state = [{ _id:1, name:'Ethan'}];
      let action = createGenre({name:'David'});
      let result = reducer(state,action);
      expect(result[0]).toBe(state[0]);
      expect(result[1].name).toBe('David');
      expect(result[1]._id).toBeDefined();
    });
  });
  describe('GENRE_DELETE', () => {
    it('removes a genre with matching id, leaving an empty state', () => {
      let state = [{ _id:1, name:'Ethan'}];
      let action = deleteGenre({ _id:1, name:'Ethan'});
      let result = reducer(state,action);
      expect(state).toBe(state);
      expect(result).toEqual([]);
    });
    it('removes a genre from a list of genres', () => {
      let state = [{ _id:1, name:'Ethan'},{ _id:2, name:'David'}];
      let action = deleteGenre({ _id:1, name: 'Ethan'});
      let result = reducer(state,action);
      expect(result.length).toBe(1);
      expect(result[0]._id).toBe(2);
    });
  });
});