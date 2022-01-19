import React from "react";
import { useDispatch } from "react-redux";
import {
  changeNoteContent,
  saveNoteButtonClicked,
} from "../../redux/action-creators";

export const NoteEditor = ({ note }) => {
  const dispatch = useDispatch();

  const handleChangeContent = (event) => {
    dispatch(
      changeNoteContent({
        id: note.id,
        content: event.target.value,
      })
    );
  };

  const handleSaveClicked = () => {
    dispatch(
      saveNoteButtonClicked({
        id: note.id,
      })
    );
  };

  return (
    <tr>
      <td>
        <input value={note.content} onChange={handleChangeContent} />
      </td>
      <td>{note.category}</td>
      <td>{note.created}</td>
      <td>{note.dates}</td>
      <td>
        <button onClick={handleSaveClicked}>save</button>
        <button>cancel</button>
      </td>
    </tr>
  );
};
