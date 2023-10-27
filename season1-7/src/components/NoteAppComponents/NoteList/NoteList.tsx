import { INote } from "../AddNote/AddNote";
import Note from "../Note/Note";
import "./noteList.css";

interface IProps{
  notes:INote[]

}

const status:string[]=["All","completed","open"]
function NoteList({notes}:IProps) {
  if(notes.length===0) return <div className="NoteListContainer">
    <p style={{textAlign:"center"}}>there is any notes</p>
    </div>
  return (
    <div className="NoteListContainer">
      <div className="NoteListContainer_status">
        {status.map(item=><p key={item}>{item}</p>)}
      </div>
      <div className="NoteListContainer_NoteList">
       <Note />
      </div>
    </div>
  )
}

export default NoteList