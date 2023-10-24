import CourseList from "./components/CoursListComponents/CourseList/CourseList"
import Header from "./components/CoursListComponents/Header/Header"
import "./app.css"

//this file is a component and is the father of all the component and this component add to the real dom
function App() {

  return (
    <div className="App_container">
      <Header />
      <CourseList/>
    </div>
  )
}

export default App
