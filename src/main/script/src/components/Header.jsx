import React,{ Component } from 'react';
import logo from '../img/logo.jpg';
import {Button,Image} from 'react-bootstrap';
import '../App.css';
class Header extends Component {
  render(){
    return (
      <>
      <Image className="logo" src={logo} />
      <div>
        <Button className="Button">로그인</Button>
        <Button className="Button">회원가입</Button>
      </div>
</>
    );
}
}

export default Header;