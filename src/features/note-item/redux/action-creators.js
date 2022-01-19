import { formatDate } from "../../../utils/formatDate";
import {
  CHANGE_NOTE_CONTENT,
  EDIT_NOTE_BUTTON_CLICKED,
  SAVE_NOTE_BUTTON_CLICKED,
} from "./constants";

export const changeNoteContent = ({ id, content }) => ({
  type: CHANGE_NOTE_CONTENT,
  payload: { id, content },
});

export const saveNoteButtonClicked = ({ id }) => ({
  type: SAVE_NOTE_BUTTON_CLICKED,
  payload: { id, date: formatDate(new Date()) },
});

export const editNoteButtonClicked = ({ id }) => ({
  type: EDIT_NOTE_BUTTON_CLICKED,
  payload: { id },
});
