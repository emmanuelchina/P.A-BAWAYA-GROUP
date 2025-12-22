
import {  Routes, Route } from "react-router-dom";

import Nav from "../Components/Nav";
import Display from "../Components/Display";
import About from "../Components/About";
import Servicereadmore from "../Components/Servicereadmore";




function Approuter() {
  return (
   
  
      <Routes>
        <Route path="/" element={<Display />} />
            <Route path="About" element={<About/>} />
              <Route path="Services" element={<Servicereadmore/>} />

      </Routes>

   
  );
}

export default Approuter;
