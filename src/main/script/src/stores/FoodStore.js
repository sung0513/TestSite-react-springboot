import { observable, action } from "mobx";

//@Autobind
export default class FoodStore {
  @observable
  categoryList = [
    { id: 0, name: "전체보기" },
    { id: 1, name: "치킨" },
    { id: 2, name: "피자/양식" },
    { id: 3, name: "중국집" },
    { id: 4, name: "한식" },
    { id: 5, name: "일식" },
    { id: 6, name: "족발/보쌈" },
    { id: 7, name: "분식" }
  ];

  @observable
  storeList = [];

  @observable
  tabkey = "0";

  @action
  initialize = () => {
    console.log("initialize");
    this.storeList = [
      { name: "BBQ", tel: "010-8805-6376", category: 1, address: "성남" },
      { name: "피자헛", tel: "010-8805-6376", category: 2, address: "서울" },
      {
        name: "몽고반점",
        tel: "010-8805-6376",
        category: 3,
        address: "수원"
      },
      { name: "비비고", tel: "010-8805-6376", category: 4, address: "용인" },
      { name: "미소야", tel: "010-8805-6376", category: 5, address: "평택" },
      { name: "가족", tel: "010-8805-6376", category: 6, address: "인천" },
      { name: "엽떡", tel: "010-8805-6376", category: 7, address: "안산" },
      {
        name: "현우네족발집",
        tel: "010-8805-6376",
        category: 6,
        address: "부산"
      }
    ];
  };

  @action
  changeTab = e => {
    console.log("changeTab");
    this.tabkey = parseInt(e); //eventKey가 string으로 넘어옴
    this.changeList();
  };

  @action
  changeList = () => {
    this.initialize();
    console.log("changeList");
    const list = [...this.storeList];
    const key = this.tabkey;
    this.storeList =
      key === 0 ? list : list.filter(item => item.category === key);
  };

  @action
  handleSelect = key => {
    console.log("handleSelect");
    this.tabkey = key;
    this.changeList();
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
