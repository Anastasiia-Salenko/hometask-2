import { formatDate } from "../../../utils/formatDate";
import { CHANGE_NOTE_CONTENT, SAVE_NOTE_BUTTON_CLICKED } from "./constants";

export const changeNoteContent = ({ id, content }) => ({
  type: CHANGE_NOTE_CONTENT,
  payload: { id, content },
});

export const saveNoteButtonClicked = ({ id }) => ({
  type: SAVE_NOTE_BUTTON_CLICKED,
  payload: { id, date: formatDate(new Date()) },
});
