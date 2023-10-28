import "./app.css"
import AccordionList from "./components/AccordionComponents/DependentAccordion/AccordionList";

// //! types and interfaces-------------------------
// export type TOptions="latest"|"earliest"|"completed"
//this file is a component and is the father of all the component and this component add to the real dom
function App() {
//   //! states-------------------------------------
//   const [selectedOption, setSelectedOption]= useState<TOptions>("latest");
//   const [notes,setNotes]=useState<INote[]>([])
  
//   //! all Actions related to "notes" state---------
//   const changeCompleted=(e: React.ChangeEvent<HTMLInputElement>)=>{
//     setNotes(notes.map(item=>(
//      (item.id===Number(e.target.value))?{...item,completed:!item.completed}:item
//     )))
//    }
//    const deleteHandler=(id:number)=>{
//      const notesClone=[...notes];
//      const filteredNotes= notesClone.filter(item=>item.id!==id)
//       setNotes(filteredNotes)
//    }
//   const sendDataHandler=(note:INote)=>{
//     setNotes([...notes,note])
//   }

//   //! filter section------------------------------------
// let filteredNotes=notes;
// filteredNotes=filter(selectedOption,notes,filteredNotes)

  return (
    // <div className="App_container">
    //   <Header />
    //   <CourseList/>
    // </div>
    // <div className="App_container">
    //   <Tab />
    // </div>
    // <div className="NoteApp_container">
    //   <Header selectedOption={selectedOption} 
    //   changeOption={(e)=>setSelectedOption((e.target.value)as TOptions)} />
    //   <Main filteredNotes={filteredNotes} changeCompleted={changeCompleted} deleteHandler={deleteHandler} 
    //   notes={notes} sendDataHandler={sendDataHandler} />
    // </div>
    <div>
      <AccordionList />
    </div>
  )
}

export default App
