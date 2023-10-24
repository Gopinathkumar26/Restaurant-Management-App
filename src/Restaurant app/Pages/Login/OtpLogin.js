import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpLogin.css';
import { useAuth } from './Login';


const OtpLogin = (props) => {
    const navigation = useNavigate()
    const initialValue = {number:""}
    const [otp, setOtp] = useState(initialValue);
    const [error, setError] = useState({});
    const [count, setCount] = useState(20);

    const auth = useAuth()
    
    let intervalRef = useRef();
    
    const decreaseCount = () => {
       if(count > 0) {
       setCount((num) => num - 1);
       }
       if(count === 0) {
        clearInterval(intervalRef.current)
       }
    };

    useEffect(() => {
      intervalRef.current = setInterval(decreaseCount, 1000);
  
      return () => clearInterval(intervalRef.current);
    }, [count]);

      
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
        errors.otp = 'Enter valid OTP'
      // } else if(!values.otp.match(/^[[0-9]{4}$/)) {
      //   errors.otp = 'OTP must be in 4-digit'
      }
      return errors;
      //if (!values.otp) return setError('Please enter OTP')
      //if(values.otp.length !== 4) return setError('Enter valid OTP')
    };

    const resendotp = () => {
      setCount(20);
      alert('OTP sent to your phone number')
    }

  //  const handleVerify = () => {
  //     if(otp.number !== '' ) {
  //       navigation('/otplogin/customermenu')
  //     }
  //   };

    const submitHandler = (e) => {
      e.preventDefault();
      setError(validate(otp));
      if(otp.number.match(/^[[0-9]{4}$/) ) {
        navigation('/otplogin/customermenu')
      }
    };

  return (
    <div className='otp_login'>
      <h2>Verify One Time Password:</h2>
      <form className='otp_box' onSubmit={submitHandler}>
        <p className='otp_desc'>Enter the 4-digit OTP sent to your<br/> 
        phone number {auth.phonenumber}</p>
        <input className='otp_input' 
               type='number' 
               name='number' 
               placeholder='Enter OTP here' 
               onChange={changeHandler}/>
        <p className='msg'>{error.otp}</p>
        <div>
          <button className='btn_verify'>Verify</button>
          <button className='btn_resend'type='reset' disabled={count > 0}
                  style={{opacity: count > 0 ? 0.5 : 1,
                          cursor: count > 0 ? 'not-allowed' : 'pointer'}}
                  onClick={resendotp}>Resend OTP({count})</button>
        </div> 
      </form>
      
    </div>
  )
}

export default OtpLogin;