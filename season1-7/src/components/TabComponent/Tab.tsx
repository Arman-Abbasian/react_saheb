import "./tab.css";
import {useState} from 'react'
interface ITab{
    id:number;
    title:string;
    content:string
}
const tabData:ITab[]=[
    {id:1,title:"item1",content:"Controlling the aspect ratio of replaced elements, such as <img> or <video>, can be a pain. For example, you might want all images occupying the same space on a page, but to not distort and lose their aspect ratio when someone uses an image file that isn’t the right size."},
    {id:2,title:"item2",content:"<img> or <video>, can be a pain. For example, you might want all images occupying the same space on a page, but to not distort and lose their aspect ratio when someone uses an image file that isn’t the right size."},
    {id:3,title:"item3",content:"<video>, can be a pain. For example, you might want all images occupying the same space on a page, but to not distort and lose their aspect ratio when someone uses an image file that isn’t the right size."}
]
function Tab() {
    const [activeTab,setActiveTab]=useState<number>(1)
    const tab=tabData.find(item=>item.id===activeTab)

  return (
    <div className="tabContainer">
        <div className="tabContainer_header">
            {tabData.map(item=>
            <p className={`tabContainer_header_tabItem ${item.id===activeTab && 'activeTab'}`} onClick={()=>setActiveTab(item.id)} 
            key={item.id}>{item.title}</p>)}
        </div>
        <div className="tabContainer_content">
            {tab?.content}
        </div>
    </div>
  )
}

export default Tab