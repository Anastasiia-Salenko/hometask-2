import { CHANGE_NOTE_CONTENT } from "./constants";

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
};
