import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManagerLogin.css';

const ManagerLogin = () => {
  const navigation = useNavigate();
  const initialValues = { username:"", password:""};
  const[formValues, setFormValues] = useState(initialValues);
  const[formErrors, setFormErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  }
 
  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 & isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
   
    if(!values.username) {
      errors.username = "Please select a position!";
    }
    if(!values.password) {
      errors.password = "Password is required!";
    }else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    handleLogin();
  };

  const handleLogin = () => {
    if(formValues.username === 'Manager' && formValues.password === '12345') {
      navigation('/managerhome')
    } 
     if(formValues.username === 'Chef' && formValues.password === '12345') {
      navigation('/kitchen')
    } 
     if(formValues.username === 'Cashier' && formValues.password === '12345') {
      navigation('/orders')
    }
  };

  return (
    <div className='manager_login'>
      <h1>Franchise Login</h1>
        <form className='manager_form' onSubmit={submitHandler}>
            <label className='manager_username'><b>Position</b></label>
            <select className='input_manager_username' 
                    name='username' 
                    onChange={changeHandler} 
                    value={formValues.username}>  
                    <option>Select </option>
                    <option>Chef</option>
                    <option>Cashier</option>
                    <option>Manager</option>
             </select>
            <p className='msg'>{formErrors.username}</p>
            <label className='manager_password'><b>Password</b></label>
            <input className='input_manager_password' 
                   type='password' 
                   name='password' 
                   onChange={changeHandler} 
                   value={formValues.password} />
            <p className='msg'>{formErrors.password}</p>
            <button className='btn_managerlogin' 
                    >Login</button>
        </form>
    </div>
  )
}

export default ManagerLogin;