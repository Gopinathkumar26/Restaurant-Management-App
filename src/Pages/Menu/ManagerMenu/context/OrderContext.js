import React, {createContext, useState} from 'react';

export const Datas = createContext();

export const DataProvider = (props) =>{
    const [orders, setOrders] = useState([]);

    return(
        <div>
           <Datas.Provider value={{ orders, setOrders }} >
               {props.children}
           </Datas.Provider>
        </div>
    );
}

// import React from "react"

// const CartContext = React.createContext({
    
//   items:[],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {},
// });

// export default CartContext;