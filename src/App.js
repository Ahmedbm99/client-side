import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/header';
import {Slider } from './components/slider';
import { Presentation } from './pages/Presentation';
import {UsersList } from './pages/UsersList';
import {Inscrire} from './pages/Register';
import {Footer} from './components/footer';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Slider/>
      <Routes>
        
          
        
        <Route path="/" element={<Presentation/>}/>
        <Route path="/Register" element={<Inscrire/>}/>
        <Route path="/ThemesDeRecherche"/>
        <Route path="/Members" element={<UsersList/>} />
        <Route path="/Posts"/>
        <Route path ="/Events" />
        <Route path="/Project"/>
        <Route path="/Contact"/>

      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}
export default App;
