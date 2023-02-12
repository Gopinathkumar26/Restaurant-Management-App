import React, { useState} from 'react';
import {Button} from 'react-bootstrap';
 

export default function Orderstatus (){
   
    const[orders, setOrders] = useState([]);

    const Handleorder=(id)=>{
        const updatedarray = orders.map((obj) => {
            if (obj.dishId === id) {
                if(obj.no === 0){
                    obj = { ...obj, status: 'Dish is Preparing', no: 1 };
                }else{
                    obj = { ...obj, status: 'Dish is Ready' };
                }
            }
            return obj;
          });
    
          setOrders(updatedarray);
    }

    return(
        <div>
            <h3>Kitchen Menu</h3>
            {orders.length ? orders.map((s, index) => (
                    <div key={index}>
                        <img src={s.dishImg} alt='' style={{height: 50, minWidth:50}}/>
                        <p>{index+1}. {s.dishName}</p>
                        <Button onClick={()=>Handleorder(s.dishId)}>{s.no ? 'Ready' : 'Take Order'}</Button>
                        <br/><br/>  
                    </div>
                ))
                :' No orders.. Just Sitback and Relax' }
        </div>
    );
}