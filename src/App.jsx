import "./App.css";
import Approuter from "./Router/Router";
import Nav from "./Components/Nav";
import Trusted from "./Components/Trusted";
import Contact from "./Components/Contact";
import Scroll from "./Components/Scrolltothetop";

function App() {
  return (
    <>
      <div>
      <Scroll/>
       <Nav/>
       <Approuter/>
       <Trusted/>
       <Contact/>


      </div>
    </>
  );
}

export default App;
