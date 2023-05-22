import { useNotesDB } from "../../hooks/useNotesDB";

export function Workspace({ currentId }) {
  const notes = useNotesDB();

  const note = notes.find((note) => note.id === currentId);
  console.log(note);

  return (
    <>
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          // value={activeNote.title}
          // onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          // value={activeNote.body}
          // onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <p>{note?.values.ddUmoBcSnlW6BdHIVdQSki}</p>
      <p>{note?.values.arEYX6WODdQPZdKmo0W79b}</p>
      <p>{note?.values.dcUSoqWPPcWPldG03dH8on}</p>
    </>
  );
}
