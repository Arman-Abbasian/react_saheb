import { useState } from "react";
import "./addNote.css";
interface IFormData{
  title:string;
  description:string
}
export interface INote{
  id:number;
  title:string;
  description:string;
  completed:boolean;
  createdAt:Date
}
interface IProps{
  sendData:(note:INote)=>void
}

function AddNote({sendData}:IProps) {
  const [formData,setFormData]=useState<IFormData>({title:"",description:""})
  const changeFormHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    sendData({...formData,id:Date.now(),completed:false,createdAt:new Date()})
  }
  return (
    <div className="AddNoteContainer">
      <h4 style={{textAlign:"center"}}>Add New Note</h4>
      <form className="AddNoteContainer_formContainer" onSubmit={submitHandler}>
        <input type="text" id="title" name="title" value={formData.title} onChange={changeFormHandler} placeholder="add title here ..." />
        <input type="text" id="description" name="description" value={formData.description} onChange={changeFormHandler} placeholder="add description here ..." />
        <button type="submit" className="submitButton" style={{width:"100%"}}>Add New Note</button>
      </form>
    </div>
  )
}

export default AddNote