import { CREATE_NOTE_BUTTON_CLICKED } from "./constants";
import { NOTE_CATEGORIES } from "../../../common/constants";

export const actionHandlers = {
  [CREATE_NOTE_BUTTON_CLICKED]: (state, action) => {
    return {
      ...state,
      notes: [
        ...state.notes,
        {
          content: "",
          category: NOTE_CATEGORIES.TASK,
          id: action.payload.id,
          isDraft: true,
        },
      ],
    };
  },
};
