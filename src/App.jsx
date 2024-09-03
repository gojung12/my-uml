import "./App.css";
import Navbar from "./component/navbar";
import Body from "./component/Body";
import AboutMe from "./component/aboutMe";
function App() {
  return (
    <>
      <div className="w-full  bg-white">
        <Navbar></Navbar>;<Body></Body><AboutMe></AboutMe>
      </div>
    </>
  );
}

export default App;
