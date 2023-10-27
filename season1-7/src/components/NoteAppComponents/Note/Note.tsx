import { INote } from "../AddNote/AddNote";
import "./note.css";
import { AiOutlineDelete } from "react-icons/ai";

interface INoteProps{
  note:INote;
  changeCompleted:()=>void
  deleteHandler:()=>void
}

function Note({note,changeCompleted,deleteHandler}:INoteProps) {
  //const dateFormat:string=new Date({note.createdAt}).toLocaleDateString("en-US",{year:"2-digit",month:"short",day:"2-digit"});
  return (
    <div  className="NoteContainer">
       <div className="NoteContainer_main">
        <div>
          <p>{note.title}</p>
          <p>{note.description}</p>
        </div>
        <div className="NoteContainer_main_icons">
          <AiOutlineDelete onClick={deleteHandler} />
          <input type="checkbox" checked={note.completed} onChange={changeCompleted} />
        </div>
       </div>
        <p className="NoteContainer_footer"></p>
    </div>
  )
}

export default Note