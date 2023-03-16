import * as types from './types';

export type Notes = {
  title: string;
  body: string;
  id?: number;
};

export const notesAddNotes = ({ title, body }: Notes) => ({
  type: types.NOTES_ADD_NOTE,
  payload: { title, body }
});

export const editNote = ({ title, body, id }: Notes) => ({
  type: types.EDIT_NOTE,
  payload: { title, body, id }
});
