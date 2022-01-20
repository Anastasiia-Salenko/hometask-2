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

const removeNote = (state, action) => {
  const notes = state.notes.filter((item) => item.id !== action.payload.id);

  return {
    ...state,
    notes,
  };
};

export const actionHandlers = {
  [NOTE_CONTENT_CHANGED]: changeNote((note, action) => ({
    ...note,
    content: action.payload.content,
  })),
  [NOTE_CATEGORY_CHANGED]: changeNote((note, action) => ({
    ...note,
    category: action.payload.category,
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
  [CANCEL_EDIT_NOTE_BUTTON_CLICKED]: (state, action) => {
    const existingNote = state.notes.find(
      (item) => item.id === action.payload.id
    );
    const reducer = existingNote.isDraft
      ? removeNote
      : changeNote((note) => ({
          ...note,
          content: note.contentOriginal,
          category: note.categoryOriginal,
          isEditing: false,
        }));

    return reducer(state, action);
  },
  [REMOVE_NOTE_BUTTON_CLICKED]: removeNote,
  [ARCHIVE_NOTE_BUTTON_CLICKED]: changeNote((note) => ({
    ...note,
    isArchived: true,
  })),
  [UNARCHIVE_NOTE_BUTTON_CLICKED]: changeNote((note) => ({
    ...note,
    isArchived: false,
  })),
};
