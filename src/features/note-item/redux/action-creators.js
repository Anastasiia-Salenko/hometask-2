import { formatDate } from "../../../utils/formatDate";
import {
  NOTE_CONTENT_CHANGED,
  EDIT_NOTE_BUTTON_CLICKED,
  SAVE_NOTE_BUTTON_CLICKED,
} from "./constants";

export const noteContentChanged = ({ id, content }) => ({
  type: NOTE_CONTENT_CHANGED,
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
