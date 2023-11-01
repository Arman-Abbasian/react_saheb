import CharacterDetails from "../CharacterDetails/CharacterDetails"
import CharacterList from "../CharacterList/CharacterList"
import Header from "../Header/Header";
import "./mainPage.css";
import {useState} from 'react';
import {characterss, episodes} from "../../../api/rickAndMorthy"
import Modal from "../Modal/Modal";

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
  const favoriteState =()=> {
    if(localStorage.getItem("favorites"))  {
      const favorites:ICharacter[] =JSON.parse(localStorage.getItem("favorites"));
      return favorites
    }
    return []
  }
  const [favorites,setFavorites]=useState<ICharacter[]>(favoriteState());
  const [characterDetail,setCharacterDetail]=useState<ICharacter|undefined>();
  const [searchCharacter,setSearchCharacter]=useState<string>("");
  const [isShow,setIsShow]=useState<boolean>(false)

  const seeDetail=(character:ICharacter)=>{
    if(character.id===characterDetail?.id){
      setCharacterDetail(undefined)
    } else{
    setCharacterDetail(character)
  }
  }
  const addToFavorite=(character:ICharacter)=>{
    setFavorites([...favorites,character])
  }
  const removeFreomFavoriteList=(id:number)=>{
    setFavorites((favorites)=>favorites.filter(item=>item.id!==id)) 
  }
  localStorage.setItem("favorites",JSON.stringify(favorites))
  const filter=()=>{
    if(searchCharacter){
      const filteredCharacter=[] as ICharacter[]
     characterss.map((character)=>{
        if(character.name.toLocaleLowerCase().includes(searchCharacter.toLocaleLowerCase())) filteredCharacter.push(character)
      })
      return filteredCharacter
    }else{
      return characterss
    }
  }
  const filteredCharacters=filter();
  return (
    <div className="MainContainer">
      {isShow && <Modal removeFreomFavoriteList={removeFreomFavoriteList} favorites={favorites} closeHandler={()=>setIsShow(false)} />}
        <Header setIsShow={()=>setIsShow(true)} favorites={favorites} characters={filteredCharacters} 
        searchCharacter={searchCharacter} 
        setSearchCharacter={(e)=>setSearchCharacter(e.target.value)} />
        <div className="MainContainer_main">
          <CharacterList characterDetail={characterDetail} 
          characters={filteredCharacters} seeDetail={seeDetail} />
          {characterDetail ?
          <CharacterDetails addToFavorite={addToFavorite} 
          episodes={episodes} favorites={favorites} character={characterDetail} />:
          <p style={{flex:3}}>please tap on eye Icon to see the character details</p>
          }
        </div>
    </div>
  )
}

export default MainPage