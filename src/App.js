import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/kontakt" element={<ContactForm />} />
        </Routes>
    </div>
  );
}

export default App;
