import "./note.css";
import { AiOutlineDelete } from "react-icons/ai";
function Note() {
  return (
    <div  className="NoteContainer">
       <div className="NoteContainer_main">
        <div>
          <p>1</p>
          <p>12</p>
        </div>
        <div className="NoteContainer_main_icons">
          <AiOutlineDelete />
          <input type="checkbox" />
        </div>
       </div>
        <p className="NoteContainer_footer">2 jun 2008</p>
    </div>
  )
}

export default Note