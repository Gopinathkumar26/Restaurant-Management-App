import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './OwnerLogin.css';

const OwnerLogin = () => {
  
  const cities = [
    {id:"1", name:"Cuddalore", value:"Cuddalore"},
    {id:"2", name:"Chennai", value:"Chennai"},
    {id:"3", name:"Pondicherry", value:"Pondicherry"},
  ];

  const branches = [
    {id:"1", cityId:"1", name:"Nellikuppam", value:"Nellikuppam"},
    {id:"2", cityId:"1", name:"Kurinjipadi", value:"Kurinjipadi"},
    {id:"3", cityId:"1", name:"Panruti", value:"Panruti"},
    {id:"4", cityId:"2", name:"Thiruvanmiyur", value:"Thiruvanmiyur"},
    {id:"5", cityId:"2", name:"Kottivakkam", value:"Kottivakkam"},
    {id:"6", cityId:"2", name:"Neelangarai", value:"Neelangarai"},
    {id:"7", cityId:"3", name:"Thavalakuppam", value:"Thavalakuppam"},
    {id:"8", cityId:"3", name:"Ariyangkuppam", value:"Ariyangkuppam"},
    {id:"9", cityId:"3", name:"Murungapakkam", value:"Murungapakkam"},
  ];

  const[city, setCity] = useState([]);
  const[branch, setBranch] = useState([]);

  useEffect(()=>{
    setCity(cities)
  },[]);

  const navigation = useNavigate();
  const initialValues = { username:"", password:""};
  const[formValues, setFormValues] = useState(initialValues);
  const[formErrors, setFormErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    if(name === 'username') {
    const br = branches.filter(x => x.cityId === value);
    setBranch(br);
    }
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
      errors.username = "Please select a city!";
    }
    if(!values.password) {
      errors.password = "Please select a branch!";
    }
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(formValues.username !== '' && formValues.password !== '') {    
      navigation('/managerlogin')
  };
  
//   const handleNext = () => {
//     if(formValues.username !== '' && formValues.password !== '') {    
//        navigation('/managerlogin')
//   };
 }

  return (
    <div className='franchise_login'>
      <h1>Select City and Branch to Login</h1>
        <form className='franchise_form' onSubmit={submitHandler}>
            <label className='label'>City</label>
            <select className='select_city' 
                    name='username' 
                    onChange={changeHandler} 
                    value={formValues.username}>
                    <option value=''>Select City</option>
                    {city.map((ct,index) => {
                      return (
                        <option key={index} value={ct.id}>{ct.name}</option>
                        )
                      })
                    }
            </select>
            <p className='msg'>{formErrors.username}</p>
            <label className='label'>Branch</label>
            <select className='select_branch' 
                    name='password' 
                    onChange={changeHandler} 
                    value={formValues.password}>
                    <option value=''>Select Branch</option>
                    {branch.map((ct,index) => {
                      return (
                        <option key={index} value={ct.id}>{ct.name}</option>
                        )
                      })
                    }
            </select>
            <p className='msg'>{formErrors.password}</p>
            <button className='btn_next' 
                    >Next</button>
                    <NavLink style={{color:"blue"}} 
                   to="/">Login as USER</NavLink>
        </form>
    </div>
  ); 
}

export default OwnerLogin;

