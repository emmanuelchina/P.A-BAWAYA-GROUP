import Home from "./Home";

import Services from "./Services";
import Partner from "./Partner";
import Showcase from "./Showcase";
import Advantage from "./Advantage";
import Review from "./Review";
import Info from "./Info";
import ReadMore from "./Aboutreadmore";
import ContactPage from "./Contacts";
import Commitment from "./Commits";

function Display() {
  return (
    <>
      <div>
      <ContactPage/>
        <Home />
        <ReadMore />
        <Showcase />
        <Services />
        <Partner />
        <Advantage />
        <Commitment/>
        <Review />
        <Info />
      </div>
    </>
  );
}

export default Display;
