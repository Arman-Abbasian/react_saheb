import { useState } from "react";
import AddNote, { INote } from "../AddNote/AddNote"
import NoteList from "../NoteList/NoteList"
import "./main.css";

function Main() {
  const [notes,setNotes]=useState<INote[]>([])
  const sendDataHandler=(note:INote)=>{
    setNotes([...notes,note])
  }
  return (
    <div className="MainContainer">
        <AddNote sendData={sendDataHandler} />
        <NoteList notes={notes} />
    </div>
  )
}

export default Main