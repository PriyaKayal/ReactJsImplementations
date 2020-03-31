import React, { Component } from 'react';
import Aco from './Aco.png';
import './App.css';
import fedexlogo from './fedexlogo.png';
import './Components/Welcome.css';
import './Components/Demo.css';
import Demo from './Components/Demo';
import Welcome from './Components/Welcome';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={Aco} className="App-Aco" alt="Accolite" />
//         <p>
//           <Demo />
//           <Welcome />
//         </p>
//         <a className="App-link"
//           href="http://accolite.com/"
//           target="_blank"
//           rel="noopener noreferrer">
//           Accolite Software Pvt Ltd
//         </a>
//       </header>
//     </div>

//   );
// }
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="main">
          <nav>
            <div>
              <ul>
                <img src={fedexlogo} className="App-fedex" alt="logo" />
              </ul>
            </div>
            <ul>
              <div>

                <p className="App-header">
                  <Demo name="Priya" designation="Dev-intern" /><img src={Aco} className="App-Aco" alt="Accolite" />
                  <Welcome name="Gnanapriya Arumugam" id="INT311" />
                </p>
                <a className="App-link"
                  href="https://github.com/PriyaKayal/ReactJsImplementations.git/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Click here to see git repo
                    </a>
                <br />
              </div>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact" color="white">Contact Us</Link>
              </li>

              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
              </Switch>

            </ul>
            <div>
              <ul>
                <img src={fedexlogo} className="App-fedex" alt="logo" />
              </ul>
            </div>

          </nav>

        </div>
      </Router>

    );
  }
}

export default App; 
