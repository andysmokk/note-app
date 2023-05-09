import { useState, useEffect, createContext, useContext } from "react";
import notesAPi from "../service/notesAPI";
import { ListItem } from "./ListItem";

export const NotesDBContext = createContext([]);

export function NotesDBProvider() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  useEffect(() => {
    async function fetchNotes() {
      const data = await notesAPi.getNotes();
      setNotes(data.data.records);
    }
    fetchNotes();
  }, []);

  console.log(notes);

  // useNotesDB();

  return (
    <NotesDBContext.Provider value={notes}>
      <ListItem />
    </NotesDBContext.Provider>
  );
}

export function useNotesDB() {
  const context = useContext(NotesDBContext);
  if (context === undefined) {
    throw new Error("error");
  }

  console.log(context);
  return context;
}
