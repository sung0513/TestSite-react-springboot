import { observable, action } from "mobx";

//@Autobind
export default class FoodStore {
  @observable
  categoryList = [
    { id: 1, name: "치킨" },
    { id: 2, name: "피자/양식" },
    { id: 3, name: "중국집" },
    { id: 4, name: "한식" },
    { id: 5, name: "일식" },
    { id: 6, name: "족발/보쌈" },
    { id: 7, name: "분식" }
  ];

  @observable
  tabkey = "/all";

  @action
  onClickTab = key => {
    console.log(key + "선택");
    this.tabkey = key;
  };

  @observable
  headerState = {
    login: false,
    register: false
  };

  @action
  onClickLogin = () => {
    console.log("onClickLogin");
    this.headerState = {
      ...this.headerState,
      login: true
    };
  };
}
