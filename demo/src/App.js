import React, { Component } from 'react';
import './App.css';
import Validate from "./components/Validate";
import './components/Validate.css'
class App extends Component{
  state={
    visible: true
  };
  render(){
    return(
      <div className="App">
        <Validate/>
      </div>
    );
  }
}

export default App;
