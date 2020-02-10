import React,{ Component } from 'react';
import logo from '../img/logo.png';
import {Button,Image} from 'react-bootstrap';
class Header extends Component {
  render(){
    return (
      <>
      <Image src={logo} />
        <Button>로그인</Button>
        <Button>회원가입</Button>

</>
    );
}
}

export default Header;