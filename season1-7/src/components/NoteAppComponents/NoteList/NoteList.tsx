import Note from "../Note/Note";
import "./noteList.css";

const status:string[]=["All","completed","open"]
function NoteList() {
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