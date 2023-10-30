import { ICharacter } from "../MainPage/MainPage";
import "./characterList.css"


interface ICharacterListProps{
  characters:ICharacter[];
  characterDetail: ICharacter;
  seeDetail:(characterDetail:ICharacter)=>void
}
function CharacterList({characters,seeDetail,characterDetail}:ICharacterListProps) {
  return (
    <div className="CharacterListContainer">
      {characters.map((character)=><Character characterDetail={characterDetail} seeDetail={seeDetail} character={character} key={character.id} />)}
    </div>
  )
}

export default CharacterList



//! Character component-------------------------------------------------------
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FcBusinesswoman,FcBusinessman } from "react-icons/fc";
interface ICharacterProps{
  character:ICharacter;
  characterDetail:ICharacter;
  seeDetail:(characterDetail:ICharacter)=>void
}
export function Character({character,seeDetail,characterDetail}:ICharacterProps) {
  return (
    <div className="CharacterContainer spaceBetween">
      <div className="CharacterContainer_main">
        <div className="CharacterContainer_main_image flexCenter">
          <img style={{borderRadius:"0.3rem"}} className="imageSet" src={character.image} alt="ali" />
        </div>
        <div className="CharacterContainer_main_description">
          <div className="flex" style={{marginBottom:"0.5rem"}}>
            {character.gender==="Male"?<FcBusinessman />:<FcBusinesswoman />}
            <p>{character.name}</p>
          </div>
          <div><span style={{backgroundColor:character.status==="Alive" ? "green" : "red"}} className="characterStatusColor"></span> <span>{character.status}</span>-<span>{character.species}</span></div>
        </div>
      </div>
      {characterDetail && character.id===characterDetail.id ?
      <HiOutlineEyeOff onClick={()=>seeDetail(character)} className="CharacterContainer_detail"/>
      :<HiOutlineEye onClick={()=>seeDetail(character)} className="CharacterContainer_detail"/>
      
      }
    </div>
  )
}
