const filter:string[]=["All","Active","Completed","Upcomming"];
import "./header.css";

function Header() {
  return (
    <div>
        <h1>course title</h1>
        <ul className="filterList">
    {filter.map((item:string)=>{
        return <li key={item}>{item}</li>
    })}
        </ul>
    </div>
  )
}

export default Header