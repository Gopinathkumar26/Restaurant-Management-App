import React, { useState} from 'react';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import briyani from '../../New folder/Images/briyani.jpg';
import naan from '../../New folder/Images/naan.jpg';
import meal from '../../New folder/Images/meal.jpg';
import parotta from '../../New folder/Images/parotta.jpg';

//import 'bootstrap/dist/css/bootstrap.min.css';

export default function DumMenu(props){
    
    const[orders, setOrders] = useState([]);
    
    
    const dishes = [ { 
        dishId : 1,
        dishName : 'Chicken Briyani',
        dishImg : briyani,
        dishPrice: 180,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 2,
        dishName : 'Naan',
        dishImg : naan,
        dishPrice: 80,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 3,
        dishName : 'Full Meals',
        dishImg : meal,
        dishPrice: 100,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 4,
        dishName : 'Parottas',
        dishImg : parotta,
        dishPrice: 50,
        status: 'In Queue',
        no:0
    }, 
    
    ];

    const Orderdish = (e, id) =>{
        e.preventDefault();
        let push = dishes.find( ({dishId}) => dishId === id );
        const updateUsers = [
            ...orders,
            {
              dishId: props.push.dishId,
              dishName: props.push.dishName,
              dishImg: props.push.dishImg,
              dishPrice: props.push.dishPrice,
              status: props.push.status,
              no: props.push.no,
            }
          ];
        
        setOrders(updateUsers);
        alert(`${push.dishName} is added to Orders`);
    }
    return (
        <div>
            <Container>
                <Row>
                    {dishes.map((s, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img  variant="top" src={s.dishImg} style={{height:250}} alt=''/>
                                <Card.Body>
                                    <Card.Title>{s.dishName}</Card.Title>
                                    <Card.Text>Price : ₹ {s.dishPrice}</Card.Text>
                                    <Button onClick={(e)=>Orderdish(e, s.dishId)}>Order Dish</Button>  
                                </Card.Body>
                            </Card>
                            <br/><br/>
                        </Col>
                    ))}   
                </Row>
            </Container>
        </div>
    );
}