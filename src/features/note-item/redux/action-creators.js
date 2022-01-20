import { formatDate } from "../../../utils/formatDate";
import {
  NOTE_CONTENT_CHANGED,
  EDIT_NOTE_BUTTON_CLICKED,
  SAVE_NOTE_BUTTON_CLICKED,
  CANCEL_EDIT_NOTE_BUTTON_CLICKED,
  REMOVE_NOTE_BUTTON_CLICKED,
  ARCHIVE_NOTE_BUTTON_CLICKED,
  UNARCHIVE_NOTE_BUTTON_CLICKED,
  NOTE_CATEGORY_CHANGED,
} from "./constants";

export const noteContentChanged = ({ id, content }) => ({
  type: NOTE_CONTENT_CHANGED,
  payload: { id, content },
});

export const noteCategoryChanged = ({ id, category }) => ({
  type: NOTE_CATEGORY_CHANGED,
  payload: { id, category },
});

export const saveNoteButtonClicked = ({ id }) => ({
  type: SAVE_NOTE_BUTTON_CLICKED,
  payload: { id, date: formatDate(new Date()) },
});

export const editNoteButtonClicked = ({ id }) => ({
  type: EDIT_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const cancelEditNoteButtonClicked = ({ id }) => ({
  type: CANCEL_EDIT_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const removeNoteButtonClicked = ({ id }) => ({
  type: REMOVE_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const archiveNoteButtonClicked = ({ id }) => ({
  type: ARCHIVE_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const unarchiveNoteButtonClicked = ({ id }) => ({
  type: UNARCHIVE_NOTE_BUTTON_CLICKED,
  payload: { id },
});
