import React, { useState} from 'react';
import {Button, ListGroup} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Orders() {
    
    const[orders, setOrders] = useState([]);

    const handleDelete = (id) => {
        const delnotes = orders.filter((to) => to.dishId !== id); 
        setOrders([...delnotes]); 
      };

    return(
        <div>
            <div>
                {orders.length ? orders.map((e, index) => (
                    <div key={index}>
                        <ListGroup as="ol" style={{width:500, margin:'auto'}} >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                <div style={{textAlign:'start'}}><b>{index+1}</b> . {e.dishName}</div>
                                Status :  <b>{e.status}</b>
                                </div>
                                <Button onClick={()=>handleDelete(e.dishId)}>Cancel</Button>
                            </ListGroup.Item>
                            <br/>
                        
                        </ListGroup>
                    </div>
                    
                ))
                : ' Nothing Else Is Here' }
                
            </div>
            
        </div>
    );
}