import "./App.css";
import { NotesDBProvider } from "./components/NotesDBProvider";
import notesAPI from "./service/notesAPI";

const data = notesAPI.getNotes();
console.log("🚀 ~ file: App.js:5 ~ data:", data);

function App() {
  return (
    <>
      <h1>HOLA</h1>
      <NotesDBProvider />
    </>
  );
}

export default App;
