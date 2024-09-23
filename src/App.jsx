import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Home from "./Pages/Home";  
import Notfound from './Pages/Notfound';
import Example from './Pages/Example';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contoh' element={<Example />} />
        <Route path='/Microsoft365' element={<Example />} />
        <Route path='/Teams' element={<Example />} />
        <Route path='/Copilot' element={<Example />} />
        <Route path='/Xbox' element={<Example />} />
        <Route path='/Dukungan' element={<Example />} />
        <Route path='/Search' element={<Example />} />
        <Route path='/Keranjang' element={<Example />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
