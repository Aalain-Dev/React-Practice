import { useState } from "react";

import "./App.css";
import Comp1 from "./Components/Comp1/Comp1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comp2 from "./Components/Comp2/Comp2";

function App() {

 
    return <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comp1/>}/>
          <Route path="Comp2" element={<Comp2/>} />
      </Routes>
    </BrowserRouter>

  
  </>;
}

export default App;
