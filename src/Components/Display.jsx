
import Home from "./Home";

import Services from "./Services";
import Partner from "./Partner";

import Subsidiaries from "./Subsidiaries";
import Showcase from "./Showcase";
import Advantage from "./Advantage";
import Review from "./Review";

import Info from "./Info";

import ReadMore from "./Aboutreadmore";


function Display() {
  return (
    <>
      <div>

         <Home />
         <ReadMore/>
  

     
          <Showcase/>
        <Services />
               <Partner/>
             <Advantage/>
              
             <Review/>
               <Info/>
           
          
          


      </div>
    </>
  );
}

export default Display;
