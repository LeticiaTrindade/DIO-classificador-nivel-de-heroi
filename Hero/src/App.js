import './App.css';
import Home from "./pages/Home";
import Xp from "./pages/XpPage";
import Victories from "./pages/Victories";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/DIO-classificador-nivel-de-heroi" element={<Home />} />
        <Route path="/DIO-classificador-nivel-de-heroi/xp" element={<Xp />} />
        <Route path="/DIO-classificador-nivel-de-heroi/victories" element={<Victories />} />
      </Routes>
    </Router>

  );
}

export default App;
