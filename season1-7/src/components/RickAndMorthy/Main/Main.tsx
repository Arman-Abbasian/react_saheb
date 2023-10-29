import CharacterDetails from "../CharacterDetails/CharacterDetails"
import CharacterList from "../CharacterList/CharacterList"
import "./main.css";

function Main() {
  return (
    <div className="MainContainer">
        <CharacterList />
        <CharacterDetails />
    </div>
  )
}

export default Main