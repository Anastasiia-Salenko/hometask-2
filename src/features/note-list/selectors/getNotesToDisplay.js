export const getNotesToDisplay = (state) => {
  const filterCondition =
    state.filter === "active"
      ? (item) => !item.isArchived
      : (item) => item.isArchived;

  return state.notes.filter(filterCondition);
};
