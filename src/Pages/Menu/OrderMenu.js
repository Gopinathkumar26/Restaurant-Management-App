import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderMenu.css';

const OrderMenu = () => {

  const navigation = useNavigate()
  const initialValues = {name:"", phonenumber:"", address1:"", address2:"", address3:"", pincode:""};
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
    
    if(!values.name) {
      errors.name = "Name is required!";
    }
    if(!values.phonenumber) {
      errors.phonenumber = "Phone number is required!";
    }else if (!values.phonenumber.match(/^[(0|91)?[6-9][0-9]{9}$/)) {
      errors.phonenumber = "This is not a valid phone number!";
    }
    if(!values.address1) {
      errors.address1 = "Door no./Plot no. is required!"
    }
    if(!values.address2) {
      errors.address2 = "Street/Apartment is required!"
    }
    if(!values.address3) {
      errors.address3 = "City, Landmark is required!"
    }
    if(!values.pincode) {
      errors.pincode = "Pincode is required!"
    }else if(values.pincode.length !== 6) {
      errors.pincode = "Enter a valid Pincode"
    }

    return errors;
  };
    const handleSubmit =() => {
      if(formValues.name !== '' && formValues.phonenumber !== '' && formValues.phonenumber.length === 10 && formValues.address1 !== '' &&
         formValues.address2 !== '' && formValues.address3 !== '' && formValues.pincode !== ''  && formValues.pincode.length === 6) {
        navigation('/otplogin/customermenu/ordermenu/welcome')
      }
    };

  return (
    <div className='order_menu'>
        <h2>Enter Address to Order</h2>
        <form className='order_form' onSubmit={submitHandler}>
            <label className='label_'>Name:</label>
            <input className='input_' type='text' name='name' onChange={changeHandler} value={formValues.name}/>
            <p className='msg'>{formErrors.name}</p>
            <label className='label_'>Phone Number:</label>
            <input className='input_' type='number' name='phonenumber' onChange={changeHandler} value={formValues.phonenumber}/>
            <p className='msg'>{formErrors.phonenumber}</p>
            <label className='label_'>Address:</label>
            <input className='input_' type='text' placeholder='Plot No./Door no.' name='address1' onChange={changeHandler} value={formValues.address1}/>
            <p className='msg'>{formErrors.address1}</p>
            <input className='input_' type='text' placeholder='Street, City' name='address2' onChange={changeHandler} value={formValues.address2}/>
            <p className='msg'>{formErrors.address2}</p>
            <input className='input_' type='text' placeholder='Landmark' name='address3' onChange={changeHandler} value={formValues.address3}/>
            <p className='msg'>{formErrors.address3}</p>
            <label className='label_'>Pincode:</label>
            <input className='input_' type='tel' name='pincode' onChange={changeHandler} value={formValues.pincode}/>
            <p className='msg'>{formErrors.pincode}</p>
            <button className='btn' type='submit' onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default OrderMenu;