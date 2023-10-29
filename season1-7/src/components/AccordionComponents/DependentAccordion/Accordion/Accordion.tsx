import { BsChevronDown } from "react-icons/bs";
import "./accordion.css";

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
let isShow:boolean=false;
if(accordion.id===openAccordion) isShow=true
  return (
    <div className={`accordionContainer ${isShow && "margin"}`}>
        <div onClick={changeOpenAccordion}  className="spaceBetween accordionContainer_header">
            <h3>{accordion.title}</h3>
            <BsChevronDown className={isShow?"chevronUp":"chevronDown"} />
        </div>
        <p className={`accordionContainer_content ${isShow ? "maxHeight":"zeroHeight"}`} >{accordion.content}</p>
    </div>
  )
}

export default Accordion