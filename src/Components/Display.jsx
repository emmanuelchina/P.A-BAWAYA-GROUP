import Home from "./Home";

import Services from "./Services";
import Partner from "./Partner";
import Showcase from "./Showcase";
import Advantage from "./Advantage";
import Review from "./Review";
import Info from "./Info";
import Industry from "./Companyunder";
import ReadMore from "./Aboutreadmore";
import Commitment from "./Commits";

function Display() {
  return (
    <>
      <div>
        <Home />
        <ReadMore />
        <Showcase />
        <Services />
        <Industry />
        <Partner />
        <Advantage />
                <Commitment />
        <Review />
        <Info />
      </div>
    </>
  );
}

export default Display;
