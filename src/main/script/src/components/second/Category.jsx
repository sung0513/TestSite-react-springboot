import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import "../../App.css";
@inject("foodStore")
@observer
class Category extends Component {
  //test
  constructor(props) {
    super(props);
    const { foodStore } = props;
    this.foodStore = foodStore;
  }
  render() {
    const { categoryList, changeTab } = this.foodStore;
    const tabkey = window.sessionStorage.getItem("tabkey");
    console.log("tabkey:" + tabkey);
    return (
      <div>
        <div className="tab2">
          <Nav variant="pills" activeKey={tabkey} onSelect={changeTab}>
            {categoryList.map(list => (
              <Nav.Item key={list.id} className="tab">
                <Nav.Link eventKey={list.id} href={"category" + list.id}>
                  {list.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Category;
