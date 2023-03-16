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
  switch (action.type) {
    case types.NOTES_ADD_NOTE:
      return {
        list: [...state.list, { ...action.payload, id: state.list.length + 1 }]
      };
    case types.EDIT_NOTE:
      // eslint-disable-next-line no-case-declarations
      const newSate: ListItem[] = [];
      state.list.map((note) => {
        if (note.id === action.payload.id) {
          newSate.push({
            ...note,
            title: action.payload.title,
            body: action.payload.body
          });
        } else {
          newSate.push(note);
        }
      });
      return {
        list: newSate
      };
    default:
      return state;
  }
}
