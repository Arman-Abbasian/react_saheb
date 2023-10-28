import { INote } from "../AddNote/AddNote";
import Note from "../Note/Note";
import "./noteList.css";

interface IProps{
  notes:INote[];
  filteredNotes:INote[];
  changeCompleted:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  deleteHandler:(id:number)=>void

}
function NoteList({notes,changeCompleted,deleteHandler,filteredNotes}:IProps) {
  let All:number=0;
  let Completed:number=0;
  let Open:number=0
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
        <div className="flex"><p>All</p> <span className="circle">{All}</span></div>
        <div className="flex"><p>Completed</p> <span className="circle">{Completed}</span></div>
        <div className="flex"><p>Open</p> <span className="circle">{Open}</span></div>
      </div>
      <div className="NoteListContainer_NoteList">
       {filteredNotes.map((item:INote)=> <Note key={item.id} deleteHandler={()=>deleteHandler(item.id)} changeCompleted={changeCompleted} note={item} />)}
      </div>
    </div>
  )
}

export default NoteList