import "./header.css";
import { AiOutlineHeart } from "react-icons/ai";

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainer_img flexCenter"><img className="imageSet" src="/images/logos/rickAndMothyLogo.png" alt="logo" /></div>
      <div className="HeaderContainer_search flexCenter"><input type="text" placeholder="search..."/></div>
      <p className="HeaderContainer_result flexCenter">fond x result</p>
      <div className="HeaderContainer_favorites flexCenter">
      <span style={{position:"relative"}}>
      <AiOutlineHeart style={{color:"red", width:"1.5rem",height:"1.5rem",objectFit:"contain"}} />
      <span className="HeaderContainer_favorites_number flexCenter">3</span>
      </span>
      </div>
    </div>
  )
}

export default Header