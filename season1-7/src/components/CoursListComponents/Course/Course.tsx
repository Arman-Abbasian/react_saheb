import { AiFillStar } from "react-icons/ai";
import "./course.css";
import { ICourse } from "../../../../api/course";

function Course({badges,condition,date,score,text,title,image}:Omit<ICourse,"id">) {
  return (
    <div className="CourseContainer">
        <CourseImage image={image} title={title}  />
        <CourseDetail badges={badges} condition={condition}
         date={date}score={score}text={text} title={title} />
    </div>
  )
}

export default Course;
//CourseImage component--------------------------------
interface ICourseImageProps{
    image:string;
    title:string
}
function CourseImage({image,title}:ICourseImageProps){
    return(
        <div className="courseImage">
            <img style={{maxWidth:"100%",borderRadius:"10px",}} src={image} alt={title} />
        </div>
    )
}

function CourseDetail({badges,condition,date,score,text,title}:Omit<ICourse,"id"|"image">){
    return(
        <div className="Course_CourseDetail_container">
            <div className="courseDetail_header spaceBetween">
            <div>
            <h3>{title}</h3>
            <p className="lightText">{text}</p>
            </div>
            <div className="flex">
                <AiFillStar style={{color:"yellow"}} /> <span> {score}</span>
            </div>
            </div>
            <div className="courseDetail_main flex">
                {badges.map((item:string)=>(
                    <span key={item} className="courseDetail_main_badge badge badge_main">{item}</span>
                ))}
                
            </div>
            <div className="courseDetail_footer spaceBetween">
                <p className="courseDetail_footer_date lightText">{new Date(date).toLocaleDateString("en-US")}</p>
                <span className={`badge 
                ${condition==="Active"?"badge_success":
                condition==="Upcoming"?"badge_danger":"badge_info"}`} >
                    {condition}</span>
            </div>
        </div>
    )
}