import { useState } from "react";
import AddNote, { INote } from "../AddNote/AddNote"
import NoteList from "../NoteList/NoteList"
import "./main.css";

function Main() {
  const [notes,setNotes]=useState<INote[]>([])
  const sendDataHandler=(note:INote)=>{
    setNotes([...notes,note])
  }
  const changeCompleted=(id:number)=>{
    const notesClone=[...notes];
   const findedNote= notesClone.find(item=>item.id===id)
   if(findedNote){
    findedNote.completed=!findedNote.completed;
    setNotes(notesClone)
   }
  }
  const deleteHandler=(id:number)=>{
    const notesClone=[...notes];
    const filteredNotes= notesClone.filter(item=>item.id!==id)
     setNotes(filteredNotes)
  }
  return (
    <div className="MainContainer">
        <AddNote sendData={sendDataHandler} />
        <NoteList notes={notes} changeCompleted={changeCompleted} deleteHandler={deleteHandler} />
    </div>
  )
}

export default Main