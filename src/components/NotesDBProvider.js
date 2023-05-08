import { useState, useEffect, createContext, useContext } from "react";
import notesAPi from "../service/notesAPI";

export const NotesDBContext = createContext(null);

export function NotesDBProvider({ components }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(notesAPi.getNotes());
  }, []);

  console.log(notes);

  return (
    <NotesDBContext.Provider value={notes}>
      {components}
    </NotesDBContext.Provider>
  );
}
