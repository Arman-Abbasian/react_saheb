import { BsChevronDown } from "react-icons/bs";
import "./accordion.css";

export interface IAccordion{
  id:number;
  title:string;
  content:string;
  child:React.ReactNode
}
interface IProps{
  accordion:IAccordion;
  openAccordion:number|undefined
  changeOpenAccordion:()=>void
  children:React.ReactNode
}

function Accordion({accordion,changeOpenAccordion,openAccordion,children}:IProps) {
let isShow:boolean=false;
if(accordion.id===openAccordion) isShow=true
  return (
    <div className={`accordionContainer ${isShow && "margin"}`}>
        <div onClick={changeOpenAccordion}  className="spaceBetween accordionContainer_header">
            <h3>{accordion.title}</h3>
            <BsChevronDown className={isShow?"chevronUp":"chevronDown"} />
        </div>
        <div className={`accordionContainer_content ${isShow ? "maxHeight":"zeroHeight"}`} >
          <p>
            {accordion.content}</p>
            {children}
            </div>
    </div>
  )
}

export default Accordion