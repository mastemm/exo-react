import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
