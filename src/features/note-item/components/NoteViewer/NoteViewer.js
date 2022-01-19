import React from "react";
import { useDispatch } from "react-redux";
import {
  editNoteButtonClicked,
  removeNoteButtonClicked,
} from "../../redux/action-creators";

export const NoteViewer = ({ note }) => {
  const dispatch = useDispatch();

  const handleEditClicked = () => {
    dispatch(
      editNoteButtonClicked({
        id: note.id,
      })
    );
  };

  const handleRemoveClicked = () => {
    dispatch(
      removeNoteButtonClicked({
        id: note.id,
      })
    );
  };

  return (
    <tr>
      <td>{note.content}</td>
      <td>{note.category}</td>
      <td>{note.created}</td>
      <td>{note.dates}</td>
      <td>
        <button onClick={handleEditClicked}>edit</button>
        <button>archive</button>
        <button onClick={handleRemoveClicked}>remove</button>
      </td>
    </tr>
  );
};
