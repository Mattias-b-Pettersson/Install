import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact="true" path="/install" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
