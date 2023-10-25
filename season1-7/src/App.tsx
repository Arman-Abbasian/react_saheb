import "./app.css"
import Header from "./components/NoteAppComponents/Header/Header"
import Main from "./components/NoteAppComponents/Main/Main"


//this file is a component and is the father of all the component and this component add to the real dom
function App() {

  return (
    // <div className="App_container">
    //   <Header />
    //   <CourseList/>
    // </div>
    // <div className="App_container">
    //   <Tab />
    // </div>
    <div className="NoteApp_container">
      <Header />
      <Main />
    </div>
  )
}

export default App
