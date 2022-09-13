import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Ambiente from './pages/Ambiente';
import Ambiente2 from './pages/Ambiente2';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="ambiente" element={<Ambiente />} />
        <Route path="ambiente2" element={<Ambiente2 />} />
        <Route path="perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
