import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import mainContent from "./components/mainContent";
import secondContent from "./components/second/secondContent";
import thirdContent from "./components/third/thirdContent";
import "./App.css";
import "whatwg-fetch";
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Search />
        <Route exact path="/" component={mainContent} />
        <Route path="/second" component={secondContent} />
        <Route path="/third" component={thirdContent}/>
        <Footer />
      </Router>
    );
  }
}

export default App;
