function Course() {
  return (
    <div>
        <CourseImage  />
        <CourseDetail />
    </div>
  )
}

export default Course;
//CourseImage component--------------------------------
// interface ICourseImageProps{
//     src:string;
//     alt:string
// }
function CourseImage(){
    return(
        <div>
            <img src="" alt="ali" />
        </div>
    )
}
//CourseDetail component--------------------------------
// interface ICourseDetailProps{
//     src:string;
//     alt:string
// }
function CourseDetail(){
    return(
        <div>
            <div className="courseDetail_header">
            <div>
            <h3>dddd</h3>
            <p>ddddd</p>
            </div>
            <div>score</div>
            </div>
            <div className="courseDetail_main">
                <span className="badge">sfsfsf</span>
                <span className="badge">sfsfsf</span>
                <span className="badge">sfsfsf</span>
            </div>
            <div className="courseDetail_footer">
                <p className="courseDetail_footer_date">12.jul.2017</p>
                <span>upcomming</span>
            </div>
        </div>
    )
}