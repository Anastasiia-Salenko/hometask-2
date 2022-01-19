import React from "react";
import { NoteEditor } from "../NoteEditor/NoteEditor";
import { NoteViewer } from "../NoteViewer/NoteViewer";

export const Note = ({ note }) => {
  if (note.isDraft || note.isEditing) {
    return <NoteEditor note={note} />;
  }

  return <NoteViewer note={note} />;
};
