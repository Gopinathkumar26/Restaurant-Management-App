import React, {useContext} from 'react';
import Context from '../../context/Context';
import {Datas} from '../../context/OrderContext';
import './ItemDisplay.css';



const ItemDisplay = (props) => {
    // const orders = useContext(Datas);
    // const setOrders = useContext(Datas);

    const orderCtx = useContext(Context);
    
    const addToOrderHandler = (e) => {
        e.preventDefault();
      orderCtx.addItem({
        id: props.id,
        name: props.name,
        amount: props.amount,
        status: props.status
     });
    //  const updateUsers = [...orders]
    //  setOrders(updateUsers)

  }; 

    return(
        <li className='meal'>
            <div>
                <img className='img' src={props.img} alt='images'></img>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>₹{props.price}</div>
            </div>
            <div>
               <button className='btn' type='submit' onClick={(e) => addToOrderHandler()}>Order</button>
            </div>
        </li>

    );
};

export default ItemDisplay;