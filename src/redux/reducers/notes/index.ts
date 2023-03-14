import * as types from './types';

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
  list: Array<{
    title: string;
    body: string;
    id: number;
  }>;
};

type Action = {
  type: string;
  payload: State;
};

export default function notesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.NOTES_ADD_NOTE:
      return {
        state,
        ...action.payload
      };
    default:
      return state;
  }
}
