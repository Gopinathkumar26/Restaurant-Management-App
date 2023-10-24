import React, { useEffect, useState, useContext, createContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';


const AuthContext = createContext({username:'', phonenumber:''})


const Login = () => {
  const navigation = useNavigate()
  //const initialValues = {username:"", phonenumber:""};
  //const[formValues, setFormValues] = useState(initialValues);
  const [username, setUsername] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const[formErrors, setFormErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);

 // const [user, setUser] = useState(initialValues)
  
  

  // const changeHandler = (e) => {
  //   const {name, value} = e.target;
  //   setFormValues({ ...formValues, [name]: value});
  // }


  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(username, phonenumber));
    setIsSubmit(true)
    if(username !== '' && phonenumber.match(/^[[6-9]{1}[0-9]{9}$/)) {
      navigation('/otplogin')
    }
    
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 & isSubmit) {
      console.log(username, phonenumber)
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
    }else if (values.phonenumber.match(/^[(0|91)?[6-9][0-9]{9}$/)){
      errors.phonenumber = "This is not a valid phone number";
    }

    return errors;
  };

    // const handleLogin = () => {
    //   if(formValues.username !== '' && formValues.phonenumber !=='') {
    //     navigation('/otplogin')
    //   }
    // };

   

  return (
    <AuthContext.Provider value={{username, phonenumber}}>
    <div className='login'>
        <h1>Welcome to ABC Restaurant</h1>
        <form className='loginform' onSubmit={submitHandler}>
          
          <label htmlFor ='username' className='name_username'>USERNAME</label> &nbsp;
          <input className='input_username' 
                 type="text" 
                 name='username' 
                 
                 onChange={(e) => setUsername(e.target.value)} 
                 value={username}/>
          <p className='msg'>{formErrors.username}</p>
          <label htmlFor ='phonenumber'  className='name_password'>PHONE NUMBER</label>
          <input className='input_password' 
                 type="number" 
                 name='phonenumber' 
                
                 onChange={(e) => setPhonenumber(e.target.value)} 
                 value={phonenumber}/>
          <p className='msg'>{formErrors.phonenumber}</p>
          <button className='btn_login'
                  >Log In</button>
         <NavLink style={{color:"blue"}} 
                   to="/ownerlogin">Login as FRANCHISE OWNER</NavLink>
        </form>
        
    </div>
    </AuthContext.Provider>
  )
}

export default Login;

export const useAuth = () => {
  return useContext(AuthContext)
}


//<button onClick={() => props.onFormSwitch('Login as FRANCHISE OWNER')} type="button" >Login as FRANCHISE OWNER</button>