import "./app.css"
import { INote } from "./components/NoteAppComponents/AddNote/AddNote";
import Header from "./components/NoteAppComponents/Header/Header"
import Main from "./components/NoteAppComponents/Main/Main"
import {useState} from 'react';

//this file is a component and is the father of all the component and this component add to the real dom
function App() {
  const [notes,setNotes]=useState<INote[]>([])
  const [selectedOption, setSelectedOption]= useState<"latest"|"earliest"|"completed">("latest");
  const sendDataHandler=(note:INote)=>{
    setNotes([...notes,note])
  }
const filteredNotes=notes;
if(selectedOption==="earliest"){
  filteredNotes.sort((a,b) => +new Date(a.createdAt)- +new Date(b.createdAt))
}else if(selectedOption==="completed"){
  filteredNotes.sort((a,b) => +(a.completed)- +(b.completed))
}else{
  filteredNotes.sort((a,b) => +new Date(b.createdAt)- +new Date(a.createdAt))
}


  const changeCompleted=(id:number)=>{
    const notesClone=[...notes];
   const findedNote= notesClone.find(item=>item.id===id)
   if(findedNote){
    findedNote.completed=!findedNote.completed;
    setNotes(notesClone)
   }
  }
  const deleteHandler=(id:number)=>{
    const notesClone=[...notes];
    const filteredNotes= notesClone.filter(item=>item.id!==id)
     setNotes(filteredNotes)
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
      <Header selectedOption={selectedOption} changeOption={(e)=>setSelectedOption((e.target.value)as "latest"|"earliest"|"completed")} />
      <Main filteredNotes={filteredNotes} changeCompleted={changeCompleted} deleteHandler={deleteHandler} 
      notes={notes} sendDataHandler={sendDataHandler} />
    </div>
  )
}

export default App
