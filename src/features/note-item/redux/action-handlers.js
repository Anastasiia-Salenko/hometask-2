import { CHANGE_NOTE_CONTENT, SAVE_NOTE_BUTTON_CLICKED } from "./constants";

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
          created: action.payload.date,
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
