import React from "react";
import { useDispatch } from "react-redux";
import { changeNoteContent } from "../../redux/action-creators";

export const NoteEditor = ({ note }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      changeNoteContent({
        id: note.id,
        content: event.target.value,
      })
    );
  };

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
