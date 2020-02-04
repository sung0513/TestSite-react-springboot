import React,{ Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

function App() extends Component {
  render() {
  return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>스프링부트 리액트 연동 확인</h2>
      </div>
        <form className="App-intro" onSubmit={this.handleSubmit}>
          <input type="test" onChange={this.handleChange} />
          <input type="submit" value="pass" />
        </form>
    </div>
  );
}
}

export default App;
