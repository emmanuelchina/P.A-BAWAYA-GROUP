
import {  Routes, Route } from "react-router-dom";

import Nav from "../Components/Nav";
import Display from "../Components/Display";
import About from "../Components/About";




function Approuter() {
  return (
   
  
      <Routes>
        <Route path="/" element={<Display />} />
            <Route path="About" element={<About/>} />

      </Routes>

   
  );
}

export default Approuter;
