import { AiOutlineCloseCircle } from "react-icons/ai";
import { ICharacter } from "../MainPage/MainPage";
import "./modal.css";
import "../CharacterList/characterList.css";
import { Character } from "../CharacterList/CharacterList";
import { AiOutlineDelete } from "react-icons/ai";

interface IProps{
  favorites:ICharacter[],
  closeHandler:()=>void
}

function Modal({favorites,closeHandler}:IProps) {
  return (
      <div className={`modalContainer ${!open && 'closeModal' }`}>
        <div className='modalContent'>
            <div className='closeButtonSection'>
            <AiOutlineCloseCircle
            className="icon" 
            onClick={closeHandler} 
            style={{color:"red", fontSize: '30px',cursor:"pointer",alignSelf:"start"}}/>
            </div>
            <div className="flexColumn favoriteList" style={{marginTop:"10px"}}>
                {favorites.map((item:ICharacter)=><Character character={item}>
                    <AiOutlineDelete style={{color:"red"}} className="CharacterContainer_detail icon" />
                </Character>)}
            </div>
        </div>
      </div>
  );
}
export default Modal;
