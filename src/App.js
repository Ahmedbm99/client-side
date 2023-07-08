import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/header';
import {Slider} from './components/slider';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Slider />
      <Routes>
        
          
        
        <Route path="/"/>
        <Route path="/Presentation"/>
        <Route path="/ThemesDeRecherche"/>
        <Route path="/Members"/>
        <Route path="/Posts"/>
        <Route path ="/Events" />
        <Route path="/Project"/>
        <Route path="/Contact"/>

      </Routes>
     </Router>
    </div>
  );
}
export default App;
