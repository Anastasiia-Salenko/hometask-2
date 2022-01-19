import { initialState } from "./initial-state";
import { actionHandlers as createNoteActionHandlers } from "../../features/create-note/redux/action-handlers";
import { actionHandlers as noteItemActionHandlers } from "../../features/note-item/redux/action-handlers";

const actionHandlers = {
  ...createNoteActionHandlers,
  ...noteItemActionHandlers,
};

export const rootReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  if (!handler) {
    return state;
  }

  return handler(state, action);
};
