import AddNote from "../AddNote/AddNote"
import NoteList from "../NoteList/NoteList"
import "./main.css";

function Main() {
  return (
    <div className="MainContainer">
        <AddNote />
        <NoteList />
    </div>
  )
}

export default Main