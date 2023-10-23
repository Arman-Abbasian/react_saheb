import Course from "../Course/Course"
import {courses,ICourse} from "../../../../api/course.ts"
import "./courseList.css"
function CourseList() {
  return (
    <div className="CourseList_container">
        {courses.map((course:ICourse)=>(
          <Course badges={course.badges} condition={course.condition}
          date={course.date} image={course.image} score={course.score} 
          text={course.text} title={course.title} key={course.id} />
        ))}
    </div>
  )
}

export default CourseList