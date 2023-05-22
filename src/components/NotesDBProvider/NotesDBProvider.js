import { useState, useEffect, createContext } from "react";
import notesAPi from "../../service/notesAPI";
import { Sidebar } from "../Sidebar/Sidebar";
// import { ListItem } from "../ListItem/ListItem";
import { Workspace } from "../Workspace/Workspace";

export const NotesDBContext = createContext([]);

export function NotesDBProvider() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState("");

  useEffect(() => {
    async function fetchNotes() {
      const data = await notesAPi.getNotes();
      setNotes(data.data.records);
    }
    fetchNotes();
  }, []);

  async function onAddNote() {
    console.log("add note");
    const currentTime = Date.now();
    const realTime = new Date(currentTime);
    const formattedTime = realTime.toLocaleString();

    const newNote = {
      date: formattedTime,
      title: "title",
      text: "text",
    };

    await notesAPi.addNote(newNote);

    // setNotes([...notes, newNote]);
  }

  return (
    <NotesDBContext.Provider value={notes}>
      <Sidebar setCurrentId={setCurrentNoteId} onAddNote={onAddNote} />
      {/* <ListItem currentId={setCurrentNoteId} /> */}
      {/* </Sidebar> */}
      <Workspace currentId={currentNoteId} />
    </NotesDBContext.Provider>
  );
}
