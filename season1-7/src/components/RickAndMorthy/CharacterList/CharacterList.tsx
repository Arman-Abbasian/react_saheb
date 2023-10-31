import { ICharacter } from "../MainPage/MainPage";
import NameAndInfos from "../NameAndInfos/NameAndInfos";
import "./characterList.css"


interface ICharacterListProps{
  characters:(ICharacter)[];
  characterDetail: ICharacter|undefined;
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

interface ICharacterProps{
  character:ICharacter;
  characterDetail:ICharacter|undefined;
  seeDetail:(characterDetail:ICharacter)=>void
}
export function Character({character,seeDetail,characterDetail}:ICharacterProps) {
  return (
    <div className="CharacterContainer spaceBetween">
      <div className="CharacterContainer_main">
        <div className="CharacterContainer_main_image flexCenter">
          <img style={{borderRadius:"0.3rem"}} className="imageSet" src={character.image} alt="ali" />
        </div>
        <NameAndInfos character={character} mb="0.5rem" />
      </div>
      {characterDetail && character.id===characterDetail.id ?
      <HiOutlineEyeOff onClick={()=>seeDetail(character)} className="CharacterContainer_detail"/>
      :<HiOutlineEye onClick={()=>seeDetail(character)} className="CharacterContainer_detail"/>
      
      }
    </div>
  )
}
