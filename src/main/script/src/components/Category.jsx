import React, {Component} from 'react';

class Category extends Component{
constructor(props){
    super(props);
    this.state={
        value:'O',
    };
}
    render(){
        return(
            <button className="category" onClick={()=>this.setState({value:'X'})}>{this.state.value}</button>
        )

    }
}

export default Category;