import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const nickname = 'kayal';
// const name = <h1>Priya {nickname}</h1>
// const user = {
//   firstname: "Gnanapriya",
//   lastname: "Arumugam"
// };
// function format(user) {
//   return user.firstname + " " + user.lastname;
// }
// const fullname = (
//   <h1>Hi, {format(user)} </h1>
// );
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
