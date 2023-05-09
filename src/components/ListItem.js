// import { useContext } from "react";
import { useNotesDB } from "./NotesDBProvider";

// export function useNotesDB() {
//   const context = useContext(NotesDBContext);
//   if (context === undefined) {
//     throw new Error("useQuintaDB must be used within a QuintaDBProvider");
//   }

//   console.log(context);
//   return context;
// }

export function ListItem() {
  const notes = useNotesDB();
  console.log(notes);
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
