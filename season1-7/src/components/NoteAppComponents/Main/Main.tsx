import AddNote, { INote } from "../AddNote/AddNote";
import NoteList from "../NoteList/NoteList"
import "./main.css";

interface IProps{
  sendDataHandler:(note:INote)=>void;
  changeCompleted:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  deleteHandler:(id:number)=>void;
  notes:INote[];
  filteredNotes:INote[]
}

function Main({sendDataHandler,notes,changeCompleted,deleteHandler,filteredNotes}:IProps) {
  
  return (
    <div className="MainContainer">
        <AddNote sendData={sendDataHandler} />
        <NoteList filteredNotes={filteredNotes} notes={notes} changeCompleted={changeCompleted} deleteHandler={deleteHandler} />
    </div>
  )
}

export default Main