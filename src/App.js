import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/header';

import { Presentation } from './pages/Presentation';
import {UsersList } from './pages/UsersList';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      
      <Routes>
        
          
        
        <Route path="/" element={<Presentation/>}/>
        
        <Route path="/ThemesDeRecherche"/>
        <Route path="/Members" element={<UsersList/>} />
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
