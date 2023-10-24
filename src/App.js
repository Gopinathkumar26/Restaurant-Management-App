import React from "react";

import { RouterProvider } from "react-router-dom";
import Route from "./Restaurant app/Navigation/Route";

function App() {
  return (  
          <div>
             <RouterProvider router={Route} />  
          </div>
            );
}

export default App;
    