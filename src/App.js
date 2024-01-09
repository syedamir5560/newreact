import "./App.css";
import One from "./One";
import Quiz from "./Quiz";
import Greet from "./Component/Greet";
import Classcomp from "./Component/Classcomp";
// import One from './props/One';
import Main from "./myCart/Main";
import Navbar from "./myCart/Navbar";

function App() {
  return (
    <div className="App">
      {/* <One/> */}
      {/* <Quiz/> */}
      {/* <Greet/>
    <Classcomp name="farari" /> */}

      {/* <One/> */}

      <Navbar />
      <Main />
    </div>
  );
}

export default App;
