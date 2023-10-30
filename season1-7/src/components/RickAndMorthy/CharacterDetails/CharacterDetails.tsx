import Button from "../Button/Button";
import { ICharacter } from "../MainPage/MainPage";
import "./characterDetails.css";
import { AiOutlineArrowDown } from "react-icons/ai";

interface IProps{
  characters:ICharacter[];
  
}
export function CharacterDetails({characters}:IProps) {
  return (
      <div className="CharacterDetailContainer">
        <CharacterDetailsCharacter/>
        <CharacterDetailsEpisodes/>
      </div>
  )
}
export default CharacterDetails;

//! CharacterDetailsCharacter component---------------------------------------
export function CharacterDetailsCharacter() {
  return (
      <div className="CharacterDetailContainer_character">
        <div className="CharacterDetailContainer_character_image">
          <img  className="imageSet" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="ali" />
        </div>
        <div className="CharacterDetailContainer_character_description">
        <div>
          <p >ale javode aldliadsf</p>
          <p>sfsf- asfsf-afsfs</p>
          </div>
          <div>
            <p className="lightText">gsfsfsfsfwe</p>
            <p>ssfsfs</p>
            <Button text="add to favorites" />
          </div>
        </div>
      </div>
  )
}


//! CharacterDetailsEpisodes component---------------------------------------
function CharacterDetailsEpisodes(){
  return(
    <div className="CharacterDetailsEpisodesContainer">
      <div className="CharacterDetailsEpisodesContainer_header spaceBetween">
        <h2>Episodes</h2>
        <span className="circle"><AiOutlineArrowDown/></span>
      </div>
      <div className="CharacterDetailsEpisodesContainer_content">
        <Episode/>
        <Episode/>
        <Episode/>
      </div>
    </div>
  )
}

//! Episode component---------------------------------------
function Episode(){
  return(
    <div className="EpisodeContainer spaceBetween">
      <div className="EpisodeContainer_info">
        <p>sfsf-sfsfsfs -s sfsfsff</p>
      </div>
      <div className="EpisodeContainer_date rickBadge">2 jun 2013</div>
    </div>
  )
}