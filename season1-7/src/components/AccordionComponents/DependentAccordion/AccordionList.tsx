import Accordion, { IAccordion } from "./Accordion/Accordion"
import {useState} from 'react';

const accordions:IAccordion[]=[
    {id:1,title:"accordion 1", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vitae veritatis sed consequuntur numquam ipsa odio quisquam illum nihil dolores commodi velit a assumenda ipsum alias error delectus, deserunt doloribus.",child:<ul><li>1</li></ul>},
    {id:2,title:"accordion 2", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vitae veritatis sed consequuntur numquam ipsa odio quisquam illum nihil dolores commodi velit a assumenda ipsum alias error delectus, deserunt doloribus.",child:<ul><li>2</li></ul>},
    {id:3,title:"accordion 3", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vitae veritatis sed consequuntur numquam ipsa odio quisquam illum nihil dolores commodi velit a assumenda ipsum alias error delectus, deserunt doloribus.",child:<ul><li>3</li></ul>}
]
function AccordionList() {
  //which id is active now
  const [openAccordion,setOpenAccordion]=useState<number|undefined>()
const changeHandler=(id:number)=>{
  if(id===openAccordion){
    setOpenAccordion (undefined)
  } else{
    setOpenAccordion(id)
  }
}
  return (
    <div>
        {accordions.map(accordion=>
        <Accordion key={accordion.id} openAccordion={openAccordion} 
        changeOpenAccordion={()=>changeHandler(accordion.id)} accordion={accordion} >
          {accordion.child}
        </Accordion>)
        
        }     
    </div>
  )
  
}
export default AccordionList