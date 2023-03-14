import * as types from './types';

export type Notes = {
  title: string;
  body: string;
};

export const notesAddNotes = ({ title, body }: Notes) => ({
  type: types.NOTES_ADD_NOTE,
  payload: { title, body }
});
