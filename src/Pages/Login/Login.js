import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
    
    if(!values.username) {
      errors.username = "Username is required!";
    }
    if(!values.phonenumber) {
      errors.phonenumber = "Phone number is required!";
    }else if (values.phonenumber.length !== 10) {
      errors.phonenumber = "Phone number must be in 10 digit";
    }else if (!values.phonenumber.match(/^[(0|91)?[6-9][0-9]{9}$/)) {
      errors.phonenumber = "This is not a valid phone number";
    }

    return errors;
  };

    const handleLogin =() => {
      if(formValues.username !== '' && formValues.phonenumber !=='') {
        navigation('/otplogin')
      }
    };

  return (
    <div className='login'>
        <h1>Welcome to ABC Restaurant</h1>
        <form className='loginform' onSubmit={submitHandler}>
          <label className='name_username'>USERNAME</label>
          <input className='input_username' 
                 type="text" 
                 name='username' 
                 onChange={changeHandler} 
                 value={formValues.username}/>
          <p className='msg'>{formErrors.username}</p>
          <label className='name_password'>PHONE NUMBER</label>
          <input className='input_password' 
                 type="number" 
                 name='phonenumber' 
                 onChange={changeHandler} 
                 value={formValues.phonenumber}/>
          <p className='msg'>{formErrors.phonenumber}</p>
          <button className='btn_login'
                  type="submit" 
                  onClick={() => handleLogin()}>Log In</button>
          <NavLink style={{color:"blue"}} 
                   to="/ownerlogin">Login as FRANCHISE OWNER</NavLink>
        </form>
    </div>
  )
}

export default Login;


//<button onClick={() => props.onFormSwitch('Login as FRANCHISE OWNER')} type="button" >Login as FRANCHISE OWNER</button>