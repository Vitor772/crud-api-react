import './App.css';
import Sobre from './components/Sobre'
import Home from './components/Home'
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import Alunos from './components/Alunos';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
           <h1>Minha Aplicacão React</h1>
           <BrowserRouter>
           <Nav variant="tabs">
             <Nav.Link as={Link} to="/">Pagina inicial</Nav.Link>
             <Nav.Link as={Link} to="/Alunos">Cadastro do Alunos</Nav.Link>
             <Nav.Link as={Link} to="/">Sobre</Nav.Link>
           </Nav>

           <Routes>
             <Route path="/" index element={<Home/>}></Route>
             <Route path="/alunos" element={<Alunos/>}></Route>
             <Route path="/sobre" element={<Sobre/>}></Route>

           </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
