import Button from "../Button/Button";
import { ICharacter, IEpisode } from "../MainPage/MainPage";
import NameAndInfos from "../NameAndInfos/NameAndInfos";
import "./characterDetails.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { episodes } from "../../../api/rickAndMorthy";

interface ICharacterDetailsProps{
  favorites:ICharacter[];
  character:ICharacter;
  episodes: IEpisode[];
  addToFavorite:(character:ICharacter)=>void
  
}
export function CharacterDetails({character,favorites,addToFavorite}:ICharacterDetailsProps) {
  return (
      <div className="CharacterDetailContainer">
        <CharacterDetailsCharacter addToFavorite={addToFavorite} character={character} favorites={favorites} />
        <CharacterDetailsEpisodes character={character} episodes={episodes}  />
      </div>
  )
}
export default CharacterDetails;

//! CharacterDetailsCharacter component---------------------------------------

interface ICharacterDetailsCharacterProps{
  character:ICharacter;
  favorites:ICharacter[];
  addToFavorite:(character:ICharacter)=>void
}

export function CharacterDetailsCharacter({character,favorites,addToFavorite}: ICharacterDetailsCharacterProps) {
  const isInFavorite:ICharacter|undefined= favorites?.find(item=>item.id===character.id)
  return (
      <div className="CharacterDetailContainer_character">
        <div className="CharacterDetailContainer_character_image">
          <img  className="imageSet" src={character.image} alt={character.name} />
        </div>
        <div className="CharacterDetailContainer_character_description">
        <div>
        <NameAndInfos character={character} mb="0rem" />
          </div>
          <div>
            <p className="lightText">Last known location</p>
            <p>{character.location.name}</p>
            {isInFavorite ? <div style={{marginTop:"1rem"}}><Button text="is as favorite" /></div>
            : <div style={{marginTop:"1rem"}}><Button onClick={()=>addToFavorite(character)}  text="add to favorites" /></div>
            }
            
          </div>
        </div>
      </div>
  )
}

//! CharacterDetailsEpisodes component---------------------------------------
interface ICharacterDetailsEpisodesProps{
  character:ICharacter;
  episodes: IEpisode[]
}
function CharacterDetailsEpisodes({character,episodes}:ICharacterDetailsEpisodesProps){

  const episodeList:string[]=character.episode.map(item=>{
    const array=item.split("/");
    return array[array.length - 1]
  })

  const characterEpisodeList :IEpisode[] =[] ;
    if (episodeList.length>0){
       episodeList.map(item=>{
        const foundedEpisode=episodes.find((episode:IEpisode)=> episode.id===Number(item))
        if (foundedEpisode){
          characterEpisodeList.push(foundedEpisode)
        }
      })
    }

  return(
    <div className="CharacterDetailsEpisodesContainer">
      <div className="CharacterDetailsEpisodesContainer_header spaceBetween">
        <h2>Episodes</h2>
        <span className="circle"><AiOutlineArrowDown/></span>
      </div>
      <div className="CharacterDetailsEpisodesContainer_content">
       {characterEpisodeList && characterEpisodeList.length>0 && 
       characterEpisodeList.slice(0,20).map(episode=><Episode key={episode?.id} episode={episode} />)}
      </div>
    </div>
  )
}

interface IEpisodeProps{
  episode:IEpisode
}
//! Episode component---------------------------------------
function Episode({episode}:IEpisodeProps){
  return(
    <div className="EpisodeContainer spaceBetween">
      <div className="EpisodeContainer_info">
        <p><span>{episode?.id}</span>-<span>{episode?.episode}</span> -<span>{episode?.name}</span></p>
      </div>
      <div className="EpisodeContainer_date rickBadge">{episode?.air_date}</div>
    </div>
  )
}