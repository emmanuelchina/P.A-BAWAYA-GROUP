
import {  Routes, Route } from "react-router-dom";


import Display from "../Components/Display";
import About from "../Components/About";
import Servicereadmore from "../Components/Servicereadmore";
import RouteLoader from "../Components/Routeloader";
import ContactPage from "../Components/Contacts";





function Approuter() {
  return (
<RouteLoader>
<Routes>
<Route path="/" element={<Display />} />
<Route path="/Services" element={<Servicereadmore />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<ContactPage />} />
</Routes>
</RouteLoader>
  );
}
export default Approuter;


 