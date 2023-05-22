// import { useState, useEffect, useMemo, createContext } from "react";
import { useNotesDB } from "../../hooks/useNotesDB";

export function ListItem({ setCurrentId }) {
  const notes = useNotesDB();
  console.log(notes);

  // const onClick = () => {};

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} onClick={() => setCurrentId(note.id)}>
          <div>
            <p>{note.values?.ddUmoBcSnlW6BdHIVdQSki}</p>
            <p>{note.values?.arEYX6WODdQPZdKmo0W79b}</p>
            <p>{note.values?.dcUSoqWPPcWPldG03dH8on}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
