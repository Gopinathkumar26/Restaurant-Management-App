import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpLogin.css';

const OtpLogin = () => {
    const navigation = useNavigate()
    const initialValue = {number:""}
    const [otp, setOtp] = useState(initialValue);
    const [error, setError] = useState({});
    const [count, setCount] = useState(60);
    
    let intervalRef = useRef();
    
    const decreaseCount = () => setCount((num) => num - 1);
  
    useEffect(() => {
      intervalRef.current = setInterval(decreaseCount, 1000);
  
      return () => clearInterval(intervalRef.current);
    }, []);

    const changeHandler = (e) => {
      const {name, value} = e.target;
      setOtp({ ...otp, [name]: value});
    }

    useEffect(() => {
      console.log(error);
      if(Object.keys(error).length === 0)  {
        console.log(otp)
      }
    }, [error])

    const validate =(values) => {
      const errors = {};
      if (!values.otp) {
        errors.otp = 'Please enter OTP'
      } else if(values.otp.length >= 1 ) {
        errors.otp = 'Invalid OTP'
      }
      return errors;
    };

   const handleVerify = () => {
      if(otp.number !== '' && otp.number.length === 4) {
        navigation('/otplogin/customermenu')
      }
    };

    const submitHandler = (e) => {
      e.preventDefault();
      setError(validate(otp));
    };

  return (
    <div className='otp_login'>
      <h2>Verify One Time Password:</h2>
      <form className='otp_box' onSubmit={submitHandler}>
        <p className='otp_desc'>Enter the 4-digit OTP sent to your<br/> phone number</p>
        <input className='otp_input' type='number' name='number' placeholder='Enter OTP here' onChange={changeHandler}/>
        <p className='msg'>{error.otp}</p>
       <div><button className='btn_verify' type='submit' onClick={() => handleVerify()}>Verify</button>
        <button className='btn_resend'type='reset'>Resend OTP({count})</button></div> 
      </form>
    </div>
  )
}

export default OtpLogin;