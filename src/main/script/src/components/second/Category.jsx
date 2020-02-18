import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { observer, inject } from "mobx-react";
@inject("foodStore")
@observer
class Category extends Component {
  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
  }
  render() {
    const { categoryList, tabkey, changeTab } = this.foodStore;
    console.log("tabkey:" + tabkey);
    return (
      <Nav variant="tabs" activeKey={tabkey} onSelect={changeTab}>
        {categoryList.map(list => (
          <Nav.Item key={list.id}>
            <Nav.Link eventKey={list.id} href={"/category"+list.id} >{list.name}</Nav.Link>
          </Nav.Item>
        ))}
        </Nav>

    );
  }
}
Category.defaultProps = {
  keyID: "/all"
};

export default Category;
