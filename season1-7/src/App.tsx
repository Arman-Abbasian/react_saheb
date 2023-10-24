import "./app.css"
import Tab from "./components/TabComponent/Tab"

//this file is a component and is the father of all the component and this component add to the real dom
function App() {

  return (
    // <div className="App_container">
    //   <Header />
    //   <CourseList/>
    // </div>
    <div className="App_container">
      <Tab />
    </div>
  )
}

export default App
