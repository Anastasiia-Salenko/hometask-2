import {
  CHANGE_NOTE_CONTENT,
  EDIT_NOTE_BUTTON_CLICKED,
  SAVE_NOTE_BUTTON_CLICKED,
} from "./constants";

export const actionHandlers = {
  [CHANGE_NOTE_CONTENT]: (state, action) => {
    const notes = state.notes.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          content: action.payload.content,
        };
      }

      return item;
    });

    return {
      ...state,
      notes,
    };
  },
  [SAVE_NOTE_BUTTON_CLICKED]: (state, action) => {
    const notes = state.notes.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          isDraft: false,
          isEditing: false,
          created: item.created || action.payload.date,
        };
      }

      return item;
    });

    return {
      ...state,
      notes,
    };
  },
  [EDIT_NOTE_BUTTON_CLICKED]: (state, action) => {
    const notes = state.notes.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          contentOriginal: item.content,
          categoryOriginal: item.category,
          isEditing: true,
        };
      }

      return item;
    });

    return {
      ...state,
      notes,
    };
  },
};
