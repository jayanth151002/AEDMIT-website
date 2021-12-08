import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './script'
import 'font-awesome/css/font-awesome.css';
import '@brainhubeu/react-carousel/lib/style.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
