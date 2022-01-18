import React from "react";

export const NoteEditor = ({ note }) => {
  const handleChange = () => {};

  return (
    <tr>
      <td>
        <input value={note.content} onChange={handleChange} />
      </td>
      <td>{note.category}</td>
      <td>{note.created}</td>
      <td>{note.dates}</td>
      <td>
        <button>save</button>
        <button>cancel</button>
      </td>
    </tr>
  );
};
