import {
  NOTE_CONTENT_CHANGED,
  EDIT_NOTE_BUTTON_CLICKED,
  SAVE_NOTE_BUTTON_CLICKED,
  CANCEL_EDIT_NOTE_BUTTON_CLICKED,
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
  [NOTE_CONTENT_CHANGED]: changeNote((note, action) => ({
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
  [CANCEL_EDIT_NOTE_BUTTON_CLICKED]: changeNote((note) => ({
    ...note,
    content: note.contentOriginal,
    category: note.categoryOriginal,
    isEditing: false,
  })),
};
