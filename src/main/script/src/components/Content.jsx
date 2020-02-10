import React,{ Component } from 'react';
import FoodImg from '../img/chicken.png'
import {Card} from 'react-bootstrap'
class Content extends Component {
    
    render(){
        return (
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={FoodImg} />
    <Card.Body>
  <Card.Title>Chicken</Card.Title>
  </Card.Body>
</Card>
        );
    }
}

export default Content;