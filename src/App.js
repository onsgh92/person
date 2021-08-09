import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Data } from './data';
import Persons from './persons';
import { useState } from 'react';



function App() {
  const [person, setperson] = useState(Data)
  return (
    <div className="App">
      <header className="App-header">
     
      <Persons  p={person} />
      </header>
    </div>
  );
}

export default App;
