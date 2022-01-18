import React from "react";

export const NoteViewer = ({ note }) => {
  return (
    <tr>
      <td>{note.content}</td>
      <td>{note.category}</td>
      <td>{note.created}</td>
      <td>{note.dates}</td>
      <td>
        <button>edit</button>
        <button>archive</button>
        <button>remove</button>
      </td>
    </tr>
  );
};
