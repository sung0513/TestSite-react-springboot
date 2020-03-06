import React, { Component } from "./node_modules/react";
import { Nav } from "./node_modules/react-bootstrap";
import { observer, inject } from "./node_modules/mobx-react";
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
    const { categoryList, tabkey, changeTab } = this.foodStore;
    console.log("tabkey:" + tabkey);
    return (
      <div>
        <div className="tab2">
          <Nav variant="pills" activeKey={tabkey} onSelect={changeTab}>
            {categoryList.map(list => (
              <Nav.Item key={list.id} className="tab">
                <Nav.Link eventKey={list.id}>{list.name}</Nav.Link>
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
