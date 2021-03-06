import React, { Component } from 'react';
import './App.css';
import Form from './Json/form.json';
import './Components/DynamicForm/dynamicform.css';
import DynamicForm from './Components/DynamicForm/dynamicform';


class App extends Component {
  state =  {Form};
  onSubmit = (model)=>{
    alert('Success');
    console.log(this.state.Form);
  }
  render() {
    return (
      
      <div className="App">
        <DynamicForm
          // title = "DB Connectivity"
          model = {this.state}
          onSubmit = {(model)=>{this.onSubmit(model)}}
        />
      </div>
    );
  }
}

export default App;
