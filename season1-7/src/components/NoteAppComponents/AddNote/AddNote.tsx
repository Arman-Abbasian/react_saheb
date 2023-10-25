import { useState } from "react";
import "./addNote.css";
interface IFormData{
  title:string;
  description:string
}
function AddNote() {
  const [formData,setFormData]=useState<IFormData>({title:"",description:""})
  const changeFormHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div className="AddNoteContainer">
      <h4 style={{textAlign:"center"}}>Add New Note</h4>
      <form className="AddNoteContainer_formContainer">
        <input type="text" id="title" name="title" value={formData.title} onChange={changeFormHandler} placeholder="add title here ..." />
        <input type="text" id="description" name="description" value={formData.description} onChange={changeFormHandler} placeholder="add description here ..." />
        <button className="submitButton" style={{width:"100%"}}>Add New Note</button>
      </form>
    </div>
  )
}

export default AddNote