import React from 'react';
import { NavLink } from 'react-router-dom';
import './ManagerHome.css';

const ManagerHome = () => {
  return (
    <div className='manager_home'>
      <div className='header'>
         <h1>ABC Restaurant</h1>
         {/* <button className='button'>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/dummenu">Offline Menu</NavLink>
            </button>  */}
         <button className='button'>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/orders">Orders</NavLink>
         </button>
         <button className='button'>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/kitchen">Kitchen</NavLink>
         </button>
         <button className='button'>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/employees">Employees</NavLink>
         </button>
       </div>
       <p className='manager_summary'>
             "If you really want to make a friend, go to someone's house and
              eat with him...the people who give you their food give you their heart"
       </p>
       <footer className='footer'>
         <h2>Our Target 100% Customer Satisfaction!</h2>
       </footer>
    </div>
  )
}

export default ManagerHome;