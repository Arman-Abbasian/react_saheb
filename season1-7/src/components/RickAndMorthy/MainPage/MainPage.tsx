import CharacterDetails from "../CharacterDetails/CharacterDetails"
import CharacterList from "../CharacterList/CharacterList"
import Header from "../Header/Header";
import "./mainPage.css";
import {useState} from 'react';
import {characterss} from "../../../api/rickAndMorthy"

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
interface Origin {
  name: string;
  url: string;
}
function MainPage() {
  const [characters,setCharacters]=useState<ICharacter[]>(characterss);
  const [favorites,setFavorites]=useState<ICharacter[]>([]);
  const [characterDetail,setCharacterDetail]=useState<ICharacter |undefined>();

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
          <CharacterList characters={characters} seeDetail={seeDetail} />
          <CharacterDetails characters={characters} />
        </div>
    </div>
  )
}

export default MainPage