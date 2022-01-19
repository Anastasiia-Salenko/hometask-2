import {
  CHANGE_NOTE_CONTENT,
  EDIT_NOTE_BUTTON_CLICKED,
  SAVE_NOTE_BUTTON_CLICKED,
} from "./constants";

const changeNote = (itemReducer) => {
  return (state, action) => {
    const notes = state.notes.map((item) => {
      if (item.id === action.payload.id) {
        return itemReducer(item, action);
      }

      return item;
    });

    return {
      ...state,
      notes,
    };
  };
};

export const actionHandlers = {
  [CHANGE_NOTE_CONTENT]: changeNote((note, action) => ({
    ...note,
    content: action.payload.content,
  })),
  [SAVE_NOTE_BUTTON_CLICKED]: changeNote((note, action) => ({
    ...note,
    isDraft: false,
    isEditing: false,
    created: note.created || action.payload.date,
  })),
  [EDIT_NOTE_BUTTON_CLICKED]: changeNote((note) => ({
    ...note,
    contentOriginal: note.content,
    categoryOriginal: note.category,
    isEditing: true,
  })),
};
