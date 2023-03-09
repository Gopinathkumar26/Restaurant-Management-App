import React from 'react';

const Welcome = () => {
  return (
    <div style={{backgroundColor:"rgb(233,196,227)", 
                 textAlign:"center",
                 fontFamily:"'Times New Roman', Times, serif", 
                 display:"flex", 
                 flexDirection:"column",
                 minHeight:"100vh", 
                 alignItems:"center", 
                 justifyContent:"center", 
                 fontSize:"larger"}}
                 >Your Order will be delivered in 30 mins,<br/>
                  Thanks for being with us!
      </div>
  )
}

export default Welcome;


  