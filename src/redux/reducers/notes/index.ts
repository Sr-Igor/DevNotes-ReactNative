import * as types from './types';
import { ListItem } from '../../../types/List';

const initialState = {
  list: [
    {
      title: 'Note 1',
      body: 'This is the body of note 1',
      id: 1
    }
  ]
};

export type State = {
  list: ListItem[];
};

type Action = {
  type: string;
  payload: ListItem;
};

export default function notesReducer(state = initialState, action: Action) {
  // eslint-disable-next-line no-case-declarations
  const newState: ListItem[] = [];
  switch (action.type) {
    case types.NOTES_ADD_NOTE:
      return {
        list: [...state.list, { ...action.payload, id: state.list.length + 1 }]
      };
    case types.EDIT_NOTE:
      state.list.map((note) => {
        if (note.id === action.payload.id) {
          newState.push({
            ...note,
            title: action.payload.title,
            body: action.payload.body
          });
        } else {
          newState.push(note);
        }
      });
      return {
        list: newState
      };
    case types.DELETE_NOTE:
      state.list.map((note) => {
        if (note.id !== action.payload.id) {
          newState.push(note);
        }
      });
      return {
        list: newState
      };
    default:
      return state;
  }
}
