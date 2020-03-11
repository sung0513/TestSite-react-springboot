import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import SecondContent from "./components/second/SecondContent";
import ThirdContent from "./components/third/ThirdContent";
import Myinfo from "./components/Myinfo";
import { observer, inject } from "mobx-react";
import "./App.css";
import "whatwg-fetch";

@inject("foodStore")
@observer
class App extends Component {
  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
  }
  componentDidMount() {
    this.foodStore.initialize();
  }
  render() {
    const { categoryList } = this.foodStore;
    return (
      <Router>
        <Header />
        <Route exact path="/" component={MainContent} />
        {categoryList.map(list => (
          <Route
            key={list.id}
            path={"/category" + list.id}
            component={SecondContent}
          />
        ))}{" "}
        <Route path="/store" component={ThirdContent} />
        <Route path="/myinfo" component={Myinfo} />
        <Footer />
      </Router>
    );
  }
}

export default App;
