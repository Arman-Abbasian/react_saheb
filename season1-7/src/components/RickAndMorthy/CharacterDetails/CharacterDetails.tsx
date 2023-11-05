import {memo} from 'react'
import Button from "../Button/Button";
import { ICharacter, IEpisode } from "../MainPage/MainPage";
import NameAndInfos from "../NameAndInfos/NameAndInfos";
import "./characterDetails.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { episodes } from "../../../api/rickAndMorthy";

interface ICharacterDetailsProps{
  favorites:ICharacter[];
  character:ICharacter;
  episodes: IEpisode[];
  addToFavorite:(character:ICharacter)=>void
  
}
const CharacterDetails=memo(function CharacterDetails({character,favorites,addToFavorite}:ICharacterDetailsProps) {
  return (
      <div className="CharacterDetailContainer">
        <CharacterDetailsCharacter addToFavorite={addToFavorite} character={character} favorites={favorites} />
        <CharacterDetailsEpisodes character={character} episodes={episodes}  />
      </div>
  )
})
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
        <div className="CharacterDetailContainer_character_description flexColumn">
        <div>
        <NameAndInfos character={character} mb="0rem" />
          </div>
          <div>
            <p className="lightText">Last known location</p>
            <p>{character.location.name}</p>
            {isInFavorite ? <div style={{marginTop:"1rem"}}><Button text="Is already in Favorite list" /></div>
            : <div style={{marginTop:"1rem",cursor:"pointer"}}><Button onClick={()=>addToFavorite(character)}  text="add to favorites" /></div>
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
import {useState} from "react";
function CharacterDetailsEpisodes({character,episodes}:ICharacterDetailsEpisodesProps){
const [isLatest,setIsLatest]=useState<boolean>(true)
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
    const sortCharacterEpisodeListFunction=():IEpisode[]=>{
      if(characterEpisodeList.length>0)
      {
        if(isLatest) return characterEpisodeList.sort((a,b)=>+new Date(b.air_date)-+new Date(a.air_date))
        return characterEpisodeList.sort((a,b)=>+new Date(a.air_date)-+new Date(b.air_date))
      }else{
        return [] as IEpisode[]
      }
    }
    const sortCharacterEpisodeList=sortCharacterEpisodeListFunction();
  return(
    <div className="CharacterDetailsEpisodesContainer">
      <div className="CharacterDetailsEpisodesContainer_header spaceBetween">
        <h2>Episodes</h2>
        <span style={{backgroundColor:"var(--secondary-color)",cursor:"pointer"}} onClick={()=>setIsLatest((is)=>!is)} className={`circle ${isLatest ?"rotateArrowSortLatest":"rotateArrowSortEarliest"}`}><AiOutlineArrowUp /></span>
      </div>
      <div className="CharacterDetailsEpisodesContainer_content">
       {sortCharacterEpisodeList && sortCharacterEpisodeList.length>0 && 
       sortCharacterEpisodeList.slice(0,20).map((episode,index)=><Episode list={String(index+1).padStart(2,"0")} key={episode?.id} episode={episode}/>)}
      </div>
    </div>
  )
}

interface IEpisodeProps{
  episode:IEpisode;
  list:string
}
//! Episode component---------------------------------------
function Episode({episode,list}:IEpisodeProps){
  return(
    <div className="EpisodeContainer spaceBetween">
      <div className="EpisodeContainer_info">
        <p><span>{list}</span>-<span>{episode?.episode}</span> :<strong>{episode?.name}</strong></p>
      </div>
      <div className="EpisodeContainer_date rickBadge">{episode?.air_date}</div>
    </div>
  )
}