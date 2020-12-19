import logo from './Logo.svg';
import './App.css';
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';



function App() {
  return (
    <div className="App">
      
      <div>
        <FullName/>
      </div>
      <div>
        <ProfilPhoto/>
      </div>
      <div>
        <Address/>
      </div>
    </div>
  );
}

export default App;
