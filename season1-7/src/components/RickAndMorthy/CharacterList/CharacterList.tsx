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
      {characters.map((character)=><Character  character={character} key={character.id}>
      {
      characterDetail && character.id===characterDetail.id 
      ?<HiOutlineEyeOff onClick={()=>seeDetail(character)} className="CharacterContainer_detail"/>
      :<HiOutlineEye onClick={()=>seeDetail(character)} className="CharacterContainer_detail"/>
      }
      </Character>)}
    </div>
  )
}

export default CharacterList



//! Character component-------------------------------------------------------
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

interface ICharacterProps{
  character:ICharacter;
  children:React.ReactNode
}
export function Character({character,children}:ICharacterProps) {
  return (
    <div className="CharacterContainer spaceBetween">
      <div className="CharacterContainer_main">
        <div className="CharacterContainer_main_image flexCenter">
          <img style={{borderRadius:"0.3rem"}} className="imageSet" src={character.image} alt="ali" />
        </div>
        <NameAndInfos character={character} mb="0.5rem" />
      </div>
      {children}
    </div>
  )
}
