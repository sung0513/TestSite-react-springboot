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
    const categoryList = [
      { id: 0, name: "전체보기"},
      { id: 1, name: "치킨" },
      { id: 2, name: "피자/양식" },
      { id: 3, name: "중국집" },
      { id: 4, name: "한식" },
      { id: 5, name: "일식" },
      { id: 6, name: "족발/보쌈" },
      { id: 7, name: "분식" }
    ];
    return (
      <Router>
        <Header />
        <Search />
        <Route exact path="/" component={mainContent} />
        {categoryList.map(list =>(
          <Route path={"/category"+list.id} value={list.id} component={secondContent} />
        ))}
        <Route path="/third" component={thirdContent}/>
        <Footer />
      </Router>
    );
  }
}

export default App;
