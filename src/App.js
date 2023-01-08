import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
