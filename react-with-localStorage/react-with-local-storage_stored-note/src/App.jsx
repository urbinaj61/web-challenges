import useLocalStorageState from "use-local-storage-state";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";

export default function App() {
  const [note, setNote] = useLocalStorageState("note", { defaultValue: "" });
  const [font, setFont] = useLocalStorageState("font", { defaultValue: "" });

  // setFont(localStorage["font"] && localStorage.getItem(JSON.parse("font")));

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className='app' style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
