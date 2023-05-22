import { useNotesDB } from "../../hooks/useNotesDB";
import { ListItem } from "../ListItem/ListItem";

export function Sidebar({ setCurrentId, onAddNote }) {
  const notes = useNotesDB();

  console.log(notes);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <button onClick={onAddNote}>add</button>
        <button>delete</button>
        <button>edit</button>
      </div>
      <div className="app-sidebar-notes">
        <ListItem setCurrentId={setCurrentId} />
      </div>
    </div>
  );
}
