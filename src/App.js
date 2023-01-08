import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Card>
            <Card.Header className='bg-dark'>Featured</Card.Header>
          </Card>
        </p>
      </header>
    </div>
  );
}

export default App;
