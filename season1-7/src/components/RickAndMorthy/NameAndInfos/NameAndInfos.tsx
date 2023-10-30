import { ICharacter } from "../MainPage/MainPage"
import { FcBusinesswoman,FcBusinessman } from "react-icons/fc";

interface IProps{
    character:ICharacter;
    mb:string
}

function NameAndInfos({character,mb}:IProps) {
  return (
    <div className="CharacterContainer_main_description">
          <div className="flex" style={{marginBottom:mb}}>
            {character.gender==="Male"?<FcBusinessman />:<FcBusinesswoman />}
            <p>{character.name}</p>
          </div>
          <div><span style={{backgroundColor:character.status==="Alive" ? "green" : "red"}} className="characterStatusColor"></span> <span>{character.status}</span>-<span>{character.species}</span></div>
        </div>
  )
}

export default NameAndInfos