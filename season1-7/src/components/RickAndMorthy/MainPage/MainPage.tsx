import CharacterDetails from "../CharacterDetails/CharacterDetails"
import CharacterList from "../CharacterList/CharacterList"
import Header from "../Header/Header";
import "./mainPage.css";
import {useState} from 'react';
import {characterss, episodes} from "../../../api/rickAndMorthy"

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}
function MainPage() {
  const [characters,setCharacters]=useState<ICharacter[]>(characterss);
  const [favorites,setFavorites]=useState<ICharacter[]>([]);
  const [characterDetail,setCharacterDetail]=useState<ICharacter|undefined>();

  const seeDetail=(character:ICharacter)=>{
    if(character.id===characterDetail?.id){
      setCharacterDetail(undefined)
    } else{
    setCharacterDetail(character)
  }
  }
  return (
    <div className="MainContainer">
        <Header favorites={favorites} characters={characters} />
        <div className="MainContainer_main">
          <CharacterList characterDetail={characterDetail} 
          characters={characters} seeDetail={seeDetail} />
          {characterDetail ?
          <CharacterDetails episodes={episodes} favorites={favorites} character={characterDetail} />:
          <p style={{flex:3}}>please tap on eye Icon to see the character details</p>
          }
          
        </div>
    </div>
  )
}

export default MainPage