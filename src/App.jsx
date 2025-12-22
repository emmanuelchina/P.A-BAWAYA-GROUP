import "./App.css";
import Approuter from "./Router/Router";
import Nav from "./Components/Nav";
import Trusted from "./Components/Trusted";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div>
       <Nav/>
       <Approuter/>
       <Trusted/>
       <Contact/>


      </div>
    </>
  );
}

export default App;
