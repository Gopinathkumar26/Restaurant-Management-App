import React, {createContext, useState} from 'react';
import briyani from '../../New folder/Images/briyani.jpg';
import naan from '../../New folder/Images/naan.jpg';
import meal from '../../New folder/Images/meal.jpg';
import parotta from '../../New folder/Images/parotta.jpg';

//import {employeeData} from './employeemetaData';

export const Datas = createContext();

export const DataProvider = (props) =>{
    const [orders, setOrders] = useState([]);//orders, orderstatus, 
    const [select, setSelect] = useState([]);//customer edit menu
    //const [emp, setEmp] = useState([...employeeData]); //employee details
    const [values, setValues] = useState({}); //add new employee
    const [dishes, setDishes] = useState([ { // menu
        dishId : 1,
        dishName : 'Masala Dosa',
        dishImg : briyani,
        dishPrice: 20,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 2,
        dishName : 'Idly',
        dishImg : naan,
        dishPrice: 10,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 3,
        dishName : 'Samosa',
        dishImg : meal,
        dishPrice: 5,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 4,
        dishName : 'Lemon Juice',
        dishImg : parotta,
        dishPrice: 15,
        status: 'In Queue',
        no:0
    }, 
    
    ]);
    const [show, setShow] = useState([...dishes]);//customer display menu 
    const [view, setView] = useState(false); //customer edit menu
    const [add, setAdd] = useState(false); //kitchen add btn
    const [stocks, setStocks] = useState([]);

    return(
         <div>
            <Datas.Provider value={{add, setAdd, stocks, setStocks, values, setValues, dishes, setDishes, orders, setOrders, show, setShow, select, setSelect, view, setView}} >
                {props.children}
            </Datas.Provider>
         </div>
     );
}

export const DataConsumer = Datas.Consumer;
