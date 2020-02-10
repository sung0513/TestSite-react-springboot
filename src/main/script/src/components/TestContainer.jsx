import React, { Component } from "react";
import Header from './Header';
import Search from './Search';
import Content from './Content';

class TestContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Content />
      </>
    );
  }
}

export default TestContainer;
