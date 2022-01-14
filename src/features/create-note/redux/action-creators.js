import { CREATE_NOTE_BUTTON_CLICKED } from "./constants";

export const createNoteButtonClicked = ({ id }) => ({
  type: CREATE_NOTE_BUTTON_CLICKED,
  payload: { id },
});
