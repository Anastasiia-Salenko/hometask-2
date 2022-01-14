import React from "react";
import { useDispatch } from "react-redux";
import { createNoteButtonClicked } from "../../redux/action-creators";
import { v4 as uuidv4 } from 'uuid';

export const CreateNoteButton = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(createNoteButtonClicked({
      id: uuidv4(),
    }));
  };

  return (
    <button onClick={handleButtonClick}>Create note</button>
  )
};
