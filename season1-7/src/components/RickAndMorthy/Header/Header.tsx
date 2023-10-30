import "./header.css";
import { AiOutlineHeart } from "react-icons/ai";
import {ICharacter} from "../MainPage/MainPage"

interface IProps{
  favorites:ICharacter[];
  characters:ICharacter[]
}
function Header({favorites,characters}:IProps) {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainer_img flexCenter"><img className="imageSet" src="/images/logos/rickAndMothyLogo.png" alt="logo" /></div>
      <div className="HeaderContainer_search flexCenter"><input type="text" placeholder="search..."/></div>
      <p className="HeaderContainer_result flexCenter">found {characters.length} result</p>
      <div className="HeaderContainer_favorites flexCenter">
      <span style={{position:"relative"}}>
      <AiOutlineHeart style={{color:"red", width:"1.5rem",height:"1.5rem",objectFit:"contain"}} />
      <span className="HeaderContainer_favorites_number flexCenter">{favorites.length}</span>
      </span>
      </div>
    </div>
  )
}

export default Header