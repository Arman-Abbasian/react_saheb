import "./app.css"
import { INote } from "./components/NoteAppComponents/AddNote/AddNote";
import Header from "./components/NoteAppComponents/Header/Header"
import Main from "./components/NoteAppComponents/Main/Main"
import {useState} from 'react';

//! types and interfaces-------------------------
type TOptions="latest"|"earliest"|"completed"
//this file is a component and is the father of all the component and this component add to the real dom
function App() {
  //! states-------------------------------------
  const [selectedOption, setSelectedOption]= useState<TOptions>("latest");
  const [notes,setNotes]=useState<INote[]>([])
  
  //! all Actions related to "notes" state---------
  const changeCompleted=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setNotes(notes.map(item=>(
     (item.id===Number(e.target.value))?{...item,completed:!item.completed}:item
    )))
   }
   const deleteHandler=(id:number)=>{
     const notesClone=[...notes];
     const filteredNotes= notesClone.filter(item=>item.id!==id)
      setNotes(filteredNotes)
   }
  const sendDataHandler=(note:INote)=>{
    setNotes([...notes,note])
  }

  //! filter section------------------------------------
let filteredNotes=notes;
if(selectedOption==="earliest"){
  filteredNotes.sort((a,b) => +new Date(a.createdAt)- +new Date(b.createdAt))
}else if(selectedOption==="completed"){
  filteredNotes=[...notes].sort((a,b) => +(a.completed)- +(b.completed))
}else{
  filteredNotes=[...notes].sort((a,b) => +new Date(b.createdAt)- +new Date(a.createdAt))
}

  return (
    // <div className="App_container">
    //   <Header />
    //   <CourseList/>
    // </div>
    // <div className="App_container">
    //   <Tab />
    // </div>
    <div className="NoteApp_container">
      <Header selectedOption={selectedOption} 
      changeOption={(e)=>setSelectedOption((e.target.value)as TOptions)} />
      <Main filteredNotes={filteredNotes} changeCompleted={changeCompleted} deleteHandler={deleteHandler} 
      notes={notes} sendDataHandler={sendDataHandler} />
    </div>
  )
}

export default App
