import React, { Component } from "react";
import Category from "../second/Category";
import Storeinfo from "./Storeinfo";
import Search from "../Search";
class ThirdContent extends Component {
  render() {
    return (
      <>
        <Search />
        <Category />
        <Storeinfo />
      </>
    );
  }
}

export default ThirdContent;
