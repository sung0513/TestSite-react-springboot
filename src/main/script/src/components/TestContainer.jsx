import React, { Component } from "react";
import Header from './Header';
import Search from './Search';
import Content from './Content';
import Footer from './Footer';

class TestContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Content />
        <Footer />
      </>
    );
  }
}

export default TestContainer;
