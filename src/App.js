import "./styles.css";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";


export default function App() {
  return (
    <div className="App">
      <ToggleLangs/>
      <Contenu/>
    </div>
  );
}
