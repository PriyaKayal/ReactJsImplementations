import React from 'react';
import Aco from './Aco.png';
import './App.css';
import './Components/Welcome.css'
import './Components/Demo.css'
import Demo from './Components/Demo'
import Welcome from './Components/Welcome'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Aco} className="App-Aco" alt="Accolite" />
        <p>
          <Demo />
          <Welcome />
        </p>
        <a className="App-link"
          href="http://accolite.com/"
          target="_blank"
          rel="noopener noreferrer">
          Accolite Software Pvt Ltd
        </a>
      </header>
    </div>

  );
}

export default App;
