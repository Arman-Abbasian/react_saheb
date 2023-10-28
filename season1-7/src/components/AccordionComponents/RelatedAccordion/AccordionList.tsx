import Accordion, { IAccordion } from "./Accordion/Accordion"

const accordions:IAccordion[]=[
    {id:1,title:"accordion 1", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vitae veritatis sed consequuntur numquam ipsa odio quisquam illum nihil dolores commodi velit a assumenda ipsum alias error delectus, deserunt doloribus."},
    {id:2,title:"accordion 2", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vitae veritatis sed consequuntur numquam ipsa odio quisquam illum nihil dolores commodi velit a assumenda ipsum alias error delectus, deserunt doloribus."},
    {id:3,title:"accordion 3", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vitae veritatis sed consequuntur numquam ipsa odio quisquam illum nihil dolores commodi velit a assumenda ipsum alias error delectus, deserunt doloribus."}
]
function AccordionList() {
  return (
    <div>
        {accordions.map(accordion=><Accordion accordion={accordion} />)}
        
    </div>
  )
}

export default AccordionList