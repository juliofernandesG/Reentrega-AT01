import './App.css';
import Menulateral from './componentes/Menulateral';
import MenuBar from './componentes/MenuBar';
import MenuImage from './componentes/MenuImage';
import MenuCard from './componentes/MenuCard';
import ProgrammingLanguages from './componentes/ProgrammingLanguages';
import EngineeringAreas from './componentes/EngineeringAreas';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
<div class="parent">
        <div className="MenuLateral">
        <Menulateral />
        </div>
        <div className="MenuBar">
        <MenuBar />
        </div>
        <div className="MenuImage">
        <MenuImage/>
        </div>
        <div className="MenuCard">
        <MenuCard />
        </div>
        <div className="ProgrammingLanguages">
          <ProgrammingLanguages />
        </div>
        <div className="EngineeringAreas">
          <EngineeringAreas />
        </div>
        <div className="Footer">
      <Footer />
        </div>
</div>
    </div>
  );
}

export default App;
