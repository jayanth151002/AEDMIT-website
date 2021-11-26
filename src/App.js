import React, { Component } from "react";
import Main from "./components/MainComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
