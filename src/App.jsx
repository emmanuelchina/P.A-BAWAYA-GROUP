import "./App.css";
import { useState } from "react";
import AppRouter from "./Router/Router";
import Nav from "./Components/Nav";
import Trusted from "./Components/Trusted";
import Contact from "./Components/Contact";
import Scroll from "./Components/Scrolltothetop";


function App() {


return (
<>

<Scroll />
<Nav />
<AppRouter />
<Trusted />
<Contact />
</>

);
}

export default App;