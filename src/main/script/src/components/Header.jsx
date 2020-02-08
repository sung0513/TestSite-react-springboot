import React,{ Component } from 'react';


class Header extends Component {
  render(){
    return (
      <div>
        <img src='./logo.png'/>
        <button>로그인</button>
        <button>회원가입</button>
        </div>
    );
}
}

export default Header;