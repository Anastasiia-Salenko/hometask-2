import React from "react";
import { useDispatch } from "react-redux";
import { createNoteButtonClicked } from "../../redux/action-creators";

export const CreateNoteButton = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(createNoteButtonClicked());
  };

  return <button onClick={handleButtonClick}>Create note</button>;
};
