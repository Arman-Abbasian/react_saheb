import CharacterDetails from "../CharacterDetails/CharacterDetails"
import CharacterList from "../CharacterList/CharacterList"
import Header from "../Header/Header";
import "./mainPage.css";

function MainPage() {
  return (
    <div className="MainContainer">
        <Header />
        <div className="MainContainer_main">
          <CharacterList />
          <CharacterDetails />
        </div>
    </div>
  )
}

export default MainPage