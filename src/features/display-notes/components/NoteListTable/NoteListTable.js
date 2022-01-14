import React from "react";
import { useSelector } from "react-redux";
import { getNotesToDisplay } from "../../selectors/getNotesToDisplay";

export const NoteListTable = () => {
  const notes = useSelector(getNotesToDisplay);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Content</td>
            <td>Category</td>
            <td>Created</td>
            <td>Dates</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {notes.map((item) => (
            <tr key={item.id}>
              <td>{item.content}</td>
              <td>{item.category}</td>
              <td>{item.created}</td>
              <td>{item.dates}</td>
              <td>
                <button>edit</button>
                <button>archive</button>
                <button>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
