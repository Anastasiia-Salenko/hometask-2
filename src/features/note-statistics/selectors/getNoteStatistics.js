import { NOTE_CATEGORIES } from "../../../common/constants";

export const getNoteStatistics = (state) => {
  return [
    {
      category: NOTE_CATEGORIES.TASK,
      active: state.notes.filter(
        (item) => item.category === NOTE_CATEGORIES.TASK && !item.isArchived
      ).length,
      archived: state.notes.filter(
        (item) => item.category === NOTE_CATEGORIES.TASK && item.isArchived
      ).length,
    },
    {
      category: NOTE_CATEGORIES.IDEA,
      active: state.notes.filter(
        (item) => item.category === NOTE_CATEGORIES.IDEA && !item.isArchived
      ).length,
      archived: state.notes.filter(
        (item) => item.category === NOTE_CATEGORIES.IDEA && item.isArchived
      ).length,
    },
    {
      category: NOTE_CATEGORIES.RANDOM_THOUGHT,
      active: state.notes.filter(
        (item) =>
          item.category === NOTE_CATEGORIES.RANDOM_THOUGHT && !item.isArchived
      ).length,
      archived: state.notes.filter(
        (item) =>
          item.category === NOTE_CATEGORIES.RANDOM_THOUGHT && item.isArchived
      ).length,
    },
  ];
};
