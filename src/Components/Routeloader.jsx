import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function RouteLoader({ children }) {
const location = useLocation();
const [loading, setLoading] = useState(false);

useEffect(() => {
setLoading(true);
const timer = setTimeout(() => setLoading(false), 2000);
return () => clearTimeout(timer);
}, [location.pathname]);

return (
<>
{loading && <Preloader onFinish={() => setLoading(false)} />}
{children}
</>
);
}