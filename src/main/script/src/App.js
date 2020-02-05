import React,{ Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Content from './components/Content';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return  (
        <div>
            <Header/>
            <Search/>
            <Content/>
        </div>
    );
}
}


export default App;
