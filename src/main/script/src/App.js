import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import SecondContent from "./components/second/SecondContent";
import ThirdContent from "./components/third/ThirdContent";
import "./App.css";
import "whatwg-fetch";
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Search />
        <Route exact path="/" component={MainContent} />
        <Route path="/all" component={SecondContent} />
        <Route path="/third" component={ThirdContent} />
        <Footer />
      </Router>
    );
  }
}

export default App;
