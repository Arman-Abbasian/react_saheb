import { TOptions } from "../App"
import { INote } from "../components/NoteAppComponents/AddNote/AddNote"

export function filter(selectedOption:TOptions,filteredNotes:INote[],notes:INote[]){
    if(selectedOption==="earliest"){
        filteredNotes.sort((a,b) => +new Date(a.createdAt)- +new Date(b.createdAt))
      }else if(selectedOption==="completed"){
        filteredNotes=[...notes].sort((a,b) => +(a.completed)- +(b.completed))
      }else{
        filteredNotes=[...notes].sort((a,b) => +new Date(b.createdAt)- +new Date(a.createdAt))
      }
      return filteredNotes
}
