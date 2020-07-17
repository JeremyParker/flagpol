import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rootElement = document.getElementById('root');

let render = () => {
  console.log("rendering")
  ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, rootElement);
}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

render();