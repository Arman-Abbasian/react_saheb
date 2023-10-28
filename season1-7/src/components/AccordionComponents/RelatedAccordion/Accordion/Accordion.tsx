import { BsChevronDown } from "react-icons/bs";
import "./accordion.css";
import { useState } from "react";

export interface IAccordion{
  id:number;
  title:string;
  content:string
}
interface IProps{
  accordion:IAccordion
}

function Accordion({accordion}:IProps) {
  const [isShow,setIsShow]=useState<boolean>(false)
  return (
    <div onClick={()=>setIsShow(!isShow)} className={`accordionContainer ${isShow && "margin"}`}>
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