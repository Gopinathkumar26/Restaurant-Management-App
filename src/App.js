 import { RouterProvider } from "react-router-dom";
 import Route from "./Navigation/Route";
//import Layout from "./components/Layout/Layout";
import React from "react";


function App() {
  // const[form,setForm] = useState('login')

  // const changeForm = (formName) => {
  //   setForm(formName);
  // };

  return (
   //      form === "login" ? <Login onFormSwitch={changeForm} /> : <OwnerLogin  />
   <RouterProvider router={Route} />  

  );
}

export default App;
    