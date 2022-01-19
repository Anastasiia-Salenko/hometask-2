import { CHANGE_NOTE_CONTENT } from "./constants";

export const changeNoteContent = ({ id, content }) => ({
  type: CHANGE_NOTE_CONTENT,
  payload: { id, content },
});
