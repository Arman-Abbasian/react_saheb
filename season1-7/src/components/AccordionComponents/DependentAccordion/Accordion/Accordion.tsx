import { BsChevronDown } from "react-icons/bs";
import "./accordion.css";
import { useEffect, useState } from "react";

export interface IAccordion{
  id:number;
  title:string;
  content:string
}
interface IProps{
  accordion:IAccordion;
  openAccordion:number|undefined
  changeOpenAccordion:()=>void
}

function Accordion({accordion,changeOpenAccordion,openAccordion}:IProps) {
const [isShow,setIsShow]=useState(false);
      useEffect(()=>{
        if(accordion.id===openAccordion){
            setIsShow(true)
      }else{
        setIsShow(false)
      }
      },[openAccordion])
  return (
    <div onClick={changeOpenAccordion} className={`accordionContainer ${isShow && "margin"}`}>
        <div  className="spaceBetween accordionContainer_header">
            <h3>{accordion.title}</h3>
            <BsChevronDown className={isShow?"chevronUp":"chevronDown"} />
        </div>
        {isShow &&
        <p className={`${isShow ? "maxHeight":"zeroHeight"}`} >{accordion.content}</p>
      }
    </div>
  )
}

export default Accordion