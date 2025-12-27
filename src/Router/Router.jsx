import { Routes, Route, Navigate } from "react-router-dom";
import Display from "../Components/Display";
import About from "../Components/About";
import Servicereadmore from "../Components/Servicereadmore";
import RouteLoader from "../Components/Routeloader";
import ContactPage from "../Components/Contacts";
import Companyserveds from "../Components/Companyserveds";
// Optional: Create a simple 404 component
const NotFound = () => <div>404 - Page Not Found</div>;

function Approuter() {
  return (
    <RouteLoader>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/Services" element={<Servicereadmore />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Industries" element={<Companyserveds />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </RouteLoader>
  );
}
export default Approuter;
