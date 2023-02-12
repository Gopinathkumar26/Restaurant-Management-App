import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//import PhoneInput from 'react-phone-input-2';
import './Login.css';

const Login = () => {
  const navigation = useNavigate()
  const initialValues = {username:"", phonenumber:""};
  const[formValues, setFormValues] = useState(initialValues);
  const[formErrors, setFormErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);
  

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  }


  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 & isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])

  
  const validate = (values) => {
    const errors = {};
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if(!values.username) {
      errors.username = "Username is required!";
    }
    if(!values.phonenumber) {
      errors.phonenumber = "Phone number is required!";
    }else if (!regex.test(values.phonenumber)) {
      errors.phonenumber = "This is not a valid phone number";
    }

    return errors;
  };
    const handleLogin =() => {
      if(formValues.username !== '' && formValues.phonenumber !== '') {
        navigation('/otplogin')
      }
    };

  return (
    <div className='login'>
        <h1>Welcome to ABC Restaurant</h1>
        <form className='loginform' onSubmit={submitHandler}>
          <label className='name_username'>USERNAME:</label>
          <input className='input_username' type="text" name='username' onChange={changeHandler} value={formValues.username} />
          <p className='msg'>{formErrors.username}</p>
          <label className='name_password'>PHONE NUMBER:</label>
          <input className='input_password' type="number" name='phonenumber' onChange={changeHandler} value={formValues.phonenumber} />
          <p className='msg'>{formErrors.phonenumber}</p>
          <button className='btn_login' type="submit" onClick={() => handleLogin()}>Log In</button>
          <div><NavLink style={{color:"blue", textDecoration:"none"}} to="/ownerlogin">Login as FRANCHISE OWNER</NavLink></div>
        </form>
        
    </div>
  )
}

export default Login;


//<button onClick={() => props.onFormSwitch('Login as FRANCHISE OWNER')} type="button" >Login as FRANCHISE OWNER</button>