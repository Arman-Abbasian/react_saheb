import { INote } from "../AddNote/AddNote";
import Note from "../Note/Note";
import "./noteList.css";

interface IProps{
  notes:INote[];
  filteredNotes:INote[];
  changeCompleted:(id:number)=>void;
  deleteHandler:(id:number)=>void

}
function NoteList({notes,changeCompleted,deleteHandler,filteredNotes}:IProps) {
  let All=0;
  let Completed=0;
  let Open=0
  if(notes.length>0){
     All=notes.length;
    const CompletedNotes=notes.filter(item=>item.completed===true)
    const OpenNotes=notes.filter(item=>item.completed===false)
    if(CompletedNotes.length>0){
      Completed=CompletedNotes.length
    }
    if(OpenNotes.length>0){
      Open=OpenNotes.length
    }
  }
  
  if(notes.length===0) return <div className="NoteListContainer">
    <p style={{textAlign:"center"}}>there is any notes</p>
    </div>
  return (
    <div className="NoteListContainer">
      <div className="NoteListContainer_status">
        <p>All {All}</p>
        <p>Completed {Completed}</p>
        <p>Open {Open}</p>
      </div>
      <div className="NoteListContainer_NoteList">
       {filteredNotes.map((item:INote)=> <Note key={item.id} deleteHandler={()=>deleteHandler(item.id)} changeCompleted={()=>changeCompleted(item.id)} note={item} />)}
      </div>
    </div>
  )
}

export default NoteList