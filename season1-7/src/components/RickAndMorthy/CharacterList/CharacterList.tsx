import "./characterList.css"

function CharacterList() {
  return (
    <div className="CharacterListContainer">
      <Character />
      <Character/>
      <Character/>
    </div>
  )
}

export default CharacterList



//! Character component-------------------------------------------------------
import { BiShow } from "react-icons/bi";
export function Character() {
  return (
    <div className="CharacterContainer spaceBetween">
      <div className="CharacterContainer_main">
        <div className="CharacterContainer_main_image flexCenter">
          <img style={{borderRadius:"0.3rem"}} className="imageSet" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="ali" />
        </div>
        <div className="CharacterContainer_main_description">
          <div style={{marginBottom:"0.5rem"}}>ale javode aldliadsf</div>
          <div>sfsf- asfsf-afsfs</div>
        </div>
      </div>
      <BiShow className="CharacterContainer_detail"/>
    </div>
  )
}
