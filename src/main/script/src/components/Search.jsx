import React,{ Component } from 'react';
import {Form} from 'react-bootstrap'


class Search extends Component {
    render(){
        return (
            <Form.Control type="text" placeholder="Search field" />
        );
    }
}

export default Search;