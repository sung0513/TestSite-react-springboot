import React,{ Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Content from './components/Content';

import 'whatwg-fetch';

class App extends Component {
  render(){
    return  (
        <div>
            <Header/>
            <Search/>
            <Content/>
            <p> testsing 1 </p>
        </div>
        
    );
}
}

  export default App;
