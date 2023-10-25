import AddNote, { INote } from "../AddNote/AddNote"
import NoteList from "../NoteList/NoteList"
import "./main.css";

function Main() {
  const sendDataHandler=(note:INote)=>{
    console.log(note)
  }
  return (
    <div className="MainContainer">
        <AddNote sendData={sendDataHandler} />
        <NoteList />
    </div>
  )
}

export default Main