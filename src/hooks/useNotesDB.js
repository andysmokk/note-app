import { useContext } from "react";
import { NotesDBContext } from "../components/NotesDBProvider/NotesDBProvider";

export function useNotesDB() {
  const context = useContext(NotesDBContext);
  if (context === undefined) {
    throw new Error("error");
  }

  console.log(context);
  return context;
}
