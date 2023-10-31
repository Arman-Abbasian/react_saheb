import "./header.css";
import { AiOutlineHeart } from "react-icons/ai";
import {ICharacter} from "../MainPage/MainPage"

interface IProps{
  favorites:ICharacter[];
  characters:(ICharacter | undefined)[];
  searchCharacter:string;
  setSearchCharacter:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  setIsShow:React.Dispatch<React.SetStateAction<boolean>>

}
function Header({favorites,characters,searchCharacter,setSearchCharacter,setIsShow}:IProps) {
  

  return (
    <div className="HeaderContainer">
      <div className="HeaderContainer_img flexCenter">
        <img className="imageSet" src="/images/logos/rickAndMothyLogo.png" alt="logo" />
      </div>
      <div className="HeaderContainer_search flexCenter">
        <input type="text" placeholder="search..." 
        name="searchCharacter" id="searchCharacter" 
        value={searchCharacter} onChange={(e)=>setSearchCharacter(e)}/>
        </div>
      <p className="HeaderContainer_result flexCenter">found {characters.length} result</p>
      <div className="HeaderContainer_favorites flexCenter">
      <span style={{position:"relative"}}>
      <AiOutlineHeart className="HeartIcon" onClick={setIsShow} />
      <span className="HeaderContainer_favorites_number flexCenter">{favorites.length}</span>
      </span>
      </div>
    </div>
  )
}

export default Header