export const getNotesToDisplay = (state) =>
  state.notes.filter((item) => !item.isArchived);
